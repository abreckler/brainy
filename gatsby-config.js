module.exports = {
    plugins: [
        {
            resolve: `brainy-theme`,
            options: {
                configTable: "https://www.notion.so/e59fafad47ac4eb69f102508d8ee393e?v=af67b2bd079c480484cae84c761eb914"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/90b706f98ee24382a30c8b897e7cfe89?v=09a5e31e6b5c46d3a3f8a9a980b27120"
            }
        }
    ],
}
