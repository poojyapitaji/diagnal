module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage : theme => ({
                'navbar-image' : "url('/public/assets/nav_bar.png')"
            })
        },
    },
    plugins: [],
}