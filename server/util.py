from urllib.request import urlopen
from PIL import Image
from pytesseract import pytesseract
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
import enchant
import PyPDF2
import pickle
import json

__model = None
__features = None
d = enchant.Dict("en_US")
stop_words = set(stopwords.words('english'))



def isPresent(token):
    digits = "0123456789.-,'()!:;+‘%$#@&^*|"
    present = 0
    for i in range(len(token)):
        if token[i] in digits:
            present = 1
            return True
    return False

def final_tokens2(token_list):
    res = []
    list = token_list
    for token in list:
        token = str(token)
        if not isPresent(token):
            if d.check(token):
                if token.lower() not in res:
                    res.append(token.lower())

    final__tokens = res

    return final__tokens

def readPdf3(file_path):
    #pdf input
    inputPdf = open(urlopen(file_path), 'rb')

    # creating a pdf reader object
    pdfReader = PyPDF2.PdfFileReader(inputPdf)
    # creating a page object
    text_from_pdf = pdfReader.getPage(0)
    # extracting text from page
    pdf_data= text_from_pdf.extractText()
    word_tokens = word_tokenize(pdf_data)
    # converts the words in word_tokens to lower case and then checks whether
    #they are present in stop_words or not
    pdf_tokens = [w for w in word_tokens if not w.lower() in stop_words]
    final_pdf_tokens = final_tokens2(pdf_tokens)
    return final_pdf_tokens

def readImage3(image_path):
    #Open image with PIL
    img = Image.open(urlopen(image_path))
    path_to_tesseract = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
    pytesseract.tesseract_cmd = path_to_tesseract
    #Extract text from image
    text_from_image = pytesseract.image_to_string(img)
    word_tokens = word_tokenize(text_from_image)
    # converts the words in word_tokens to lower case and then checks whether
    #they are present in stop_words or not
    image_tokens = [w for w in word_tokens if not w.lower() in stop_words]
    final_image_tokens = final_tokens2(image_tokens)
    return final_image_tokens


def get_class(url):
    load_saved_artifacts()
    test_image_tokens = readImage3(url)
    row_for_test = []
    
    for i in range(0 ,len(__features)):
        if __features[i] in test_image_tokens:
            row_for_test.append(1)
        else:
            row_for_test.append(0)

    # print(type(__model.predict([row_for_test])))
    return __model.predict([row_for_test])[0]


def load_saved_artifacts():
    print('Loading saved artifacts!')
    global __model
    global __features
    with open('./artifacts/features.json', 'r') as f:
        __features = json.load(f)['feature_names']
        
    with open('./artifacts/model.pickle', 'rb') as f:
        __model = pickle.load(f)
    print('Loading Done!')

if __name__=='__main__':
    load_saved_artifacts()
    print(get_class('https://marketplace.abbyy.com/images/detailed/2/BankStatement_3.png'))
