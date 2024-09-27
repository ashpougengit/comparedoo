/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers(){
        return [
            {
                // matching all api routes
                source: "/api/:path*",
                headers: [
                    {key: "Access-Control-Allow-Credentials",value:
                        "true"
                    },
                    {key: "Access-Control-Allow-Credentials",value:
                        "*"
                    },

                ]
            }
        ]
    }
};

export default nextConfig;
