import Head from 'next/head'
import Sidebar from '../Components/Sidebar'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import Header from "../Components/Header"
import Container from '../Components/Container'
import { useState, useEffect } from 'react'
import { useSession, useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
const customTheme = {
    default: {
        colors: {
            brand: "rgb(139 92 246)",
            brandAccent: "hsl(354deg 88% 36%)",
            brandButtonText: "white",
            inputBorder: "lightgray",
            inputPlaceholder: "rgb(107 114 128)",
            defaultButtonBorder: "white",
            // ..
        },
        fontSizes: {
            baseBodySize: "18px",
            baseInputSize: "18px",
            baseLabelSize: "18px",
            baseButtonSize: "22px",
        },
        space: {
            buttonPadding: "12px 10px",
            inputPadding: "16px 15px",
            labelBottomMargin: "4px",
            labelLeftMargin: "8px",
        },
        radii: {
            borderRadiusButton: "12px",
            buttonBorderRadius: "12px",
            inputBorderRadius: "12px",
        },
        fontWeights: {
            baseButtonWeight: "bold",
        },
    },
};
export default function Customer() {

    const supabase = useSupabaseClient()
    const user = useUser()
    const session = useSession()
    useEffect(() => {
        getProfile()
    }, [session])
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState(null)
    const [full_name, setfullname] = useState(null)

    const [avatar_url, setAvatarUrl] = useState(null)


    async function getProfile() {
        try {
            setLoading(true)

            let { data, error, status } = await supabase
                .from('profiles')
                .select(`username, avatar_url,full_name`)
                .eq('id', user.id)
                .single()

            if (error && status !== 406) {
                throw error
            }

            if (data) {
                setUsername(data.username)

                setAvatarUrl(data.avatar_url)
                setfullname(data.full_name)
            }
        } catch (error) {
            alert('Error loading user data!')
            console.log(error)
        } finally {
            setLoading(false)
        }
    }


    return (


        <div>
            {session ? (
                <div className="flex h-screen w-full bg-gray-50">
                    <div className="flex w-full h-screen items-center justify-center  lg:w-1/2">
                        <div className=" bg-white px-10 py-20 rounded-3xl border-2 border-grey-200">
                            <div className="flex justify-center items-center">
                                <h1 className="text-5xl font-semibold text-slate-800">
                                    {" "}
                                    UNITE{" "}
                                </h1>
                            </div>
                            <p className="font-medium text-lg text-gray-500 mt-4">
                                Welcome Back! Please enter your details.
                            </p>
                            <div className="mt-8 ">
                                <Auth
                                    supabaseClient={supabase}
                                    appearance={{ theme: customTheme }}
                                    theme="default"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:flex bg-gray-200 items-center justify-center w-1/2 relative">
                        <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce"></div>
                        <div className="w-full h-1/2 bg-white/10 backdrop-blur-lg absolute bottom-0"></div>
                    </div>
                </div>
            ) : (
                <div className='flex'>
                    <div className='h-screen sticky top-0'>
                        <Sidebar />
                    </div>
                    <div className=' w-full pr-2'>
                        <Container username={username} />
                    </div>
                </div>)
            }
        </div>
    )
}
