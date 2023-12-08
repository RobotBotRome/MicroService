/* @type {import('next').NextConfig} */
const nextConfig = { swcMinify: true };

module.exports = nextConfig;

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "m.media-amazon.com",
                port: "",
                pathname: "/**",
            },

            {
                protocol: "https",
                hostname: "upload.wikimedia.org",
                port: "",
                pathname: "/wikipedia/commons/**",
            },
            {
                protocol: "https",
                hostname: "cdn.britannica.com",
                port: "",
                pathname: "/96/**",
            },
            {
                protocol: "https",
                hostname: "media.snl.no",
                port: "",
                pathname: "/media/**",
            },
            {
                protocol: "https",
                hostname: "pngimg.com",
                port: "",
                pathname: "/uploads/**",
            },
            {
                protocol: "https",
                hostname: "www.shutterstock.com",
                port: "",
                pathname: "/shutterstock/photos/**",
            },
            {
                protocol: "https",
                hostname: "creazilla-store.fra1.digitaloceanspaces.com",
                port: "",
                pathname: "/icons/**",
            },
            {
                protocol: "https",
                hostname: "aspectsofhistory.com",
                port: "",
                pathname: "/wp-content/uploads/**",
            },
            {
                protocol: "https",
                hostname: "i.guim.co.uk",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "ei7cr2pn3uw.exactdn.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};
