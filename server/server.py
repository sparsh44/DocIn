from flask import Flask, request, jsonify, json
import util
from flask_cors import CORS,cross_origin

app = Flask(__name__)

cors = CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def main():
    return "hi"

@app.route('/get_class', methods = ['POST'])
def get_class():
    print("IN GET CLASS")
    url_recieved = request.json['url']
    # url_recieved = str(url_recieved)

    print("............................")
    print(url_recieved)
    response = jsonify({
        'predicted_class': util.get_class(url_recieved)
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    print(util.get_class(url_recieved))
#   return response
    return json.loads(response.get_data().decode("utf-8"))

if __name__=='__main__':
    app.run(debug=True, port ='5000')