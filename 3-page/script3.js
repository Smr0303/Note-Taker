const cardContainer = document.querySelector(".card-container");

const cardData = [
  {
    heading: "heading1",
    content:
      "1",
    id: 1,
  },
  { heading: "heading2", content: "dhjalk;gjasjfasfs", id: 2 },
  { heading: "heading3", content: "dhjalk;gjasjfasfs", id: 3 },
  { heading: "heading4", content: "dhjalk;gjasjfasfs", id: 4 },
  { heading: "heading5", content: "dhjalk;gjasjfasfs", id: 5 },
  { heading: "heading6", content: "dhjalk;gjasjfasfs", id: 6 },
  { heading: "heading7", content: "dhjalk;gjasjfasfs", id: 7 },
];

const createNotes = (array) => {
  array.forEach((cardObj) => {
    const { heading, content, id } = cardObj;

    const card = document.createElement("div");
    card.classList.add("card");
    card.id = id;

    const insideHtml = `<div class="header">
        <div class="heading">${heading}</div>
        <a href ="../5page/index5.html?noteid=${id}"><div class="edit-note">
        Edit-note</div>
        </a>
            </div>
        <div class="notes">${content}</div>
    </div>`;

    card.innerHTML = insideHtml;

    cardContainer.appendChild(card);
  });
};

createNotes(cardData);

const body = document.querySelector("body");

window.addEventListener("load", () => {
  body.classList.add("visible");
});
  