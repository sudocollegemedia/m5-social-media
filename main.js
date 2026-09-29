const rootElement = document.querySelector(".page-content");

function createPost(post) {
    return `
        <article class="post" aria-label="Nieuwsbericht">
            <div class="post-meta">
                <span>${post.category}</span>
                <time datetime="${post.dateValue}">${post.date}</time>
            </div>
            <div class="post-content">
                <h1>${post.title}</h1>
                <p>${post.content}</p>
                <img class="post-image" src="${post.image}" alt="${post.imageAlt}">
            </div>
        </article>
    `;
}

const extraPosts = [
    {
        category: "Nieuws",
        dateValue: "2026-09-16",
        date: "16 september 2026",
        title: "Nieuw nieuwsbericht",
        content: "Tweede opdracht, Javascript gebouwde post.",
        image: "insert.png",
        imageAlt: "Afbeelding bij het nieuwsbericht"
    },
    {
        category: "Sport",
        dateValue: "2026-09-17",
        date: "17 september 2026",
        title: "Sportnieuws van vandaag",
        content: "Tweede opdracht, Javascript gebouwde post.",
        image: "insert.png",
        imageAlt: "Afbeelding bij het sportbericht"
    }
];

extraPosts.forEach((post) => {
    rootElement.innerHTML += createPost(post);
});

