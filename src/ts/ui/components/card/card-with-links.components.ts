
interface CardWithLinksProps {
    title: string,
    subtitle: string
    text: string
    links: Array<{href?: string,  content: string }>
}


function cardWithLinksComponent({ title, subtitle, text, links }: CardWithLinksProps) {
        return (
            `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${subtitle}</h6>
                        <p class="card-text">${text}</p>
                        ${links.map(link => ` <a href="${link.href ?? '#'}" class="card-link">${link.content}</a>`).join("")}
                    </div>
                </div>
            
            
            `
        )
}