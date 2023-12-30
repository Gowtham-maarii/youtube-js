




var Feedback = 
[
    {
        person_profile:"https://yt3.ggpht.com/yti/AGOGRCqcrgNc6UxnPBkrLEtAlIddGQ9bdjkR3kFuGwli=s88-c-k-c0x00ffffff-no-rj",
        alt:"profile-logo",
        person_email:"@gowthammarisetti1705",
        comment:"Very good input for option traders.  Pl let us know - how to decide whether we have to go for FUTURES buy or sell at the beginning of month? so that we can take the opposite PE/CE positions.",
        likes:5,
        dislikes:"<img src=\"./img/thumbs-down-.png\" alt=\"dislike\">",
        reply:"Reply",
    },
    {
        person_profile:"https://yt3.ggpht.com/yti/AGOGRCqcrgNc6UxnPBkrLEtAlIddGQ9bdjkR3kFuGwli=s88-c-k-c0x00ffffff-no-rj",
        alt:"profile-logo",
        person_email:"@gowthammarisetti1705",
        comment:"Very good input for option traders.  Pl let us know - how to decide whether we have to go for FUTURES buy or sell at the beginning of month? so that we can take the opposite PE/CE positions.",
        likes:5,
        dislikes:1,
        reply:"Reply",
    },
    {
        person_profile:src="https://yt3.ggpht.com/yti/AGOGRCqcrgNc6UxnPBkrLEtAlIddGQ9bdjkR3kFuGwli=s88-c-k-c0x00ffffff-no-rj",
        alt:"profile-logo",
        person_email:"@gowthammarisetti1705",
        comment:"Very good input for option traders.  Pl let us know - how to decide whether we have to go for FUTURES buy or sell at the beginning of month? so that we can take the opposite PE/CE positions.",
        likes:5,
        dislikes:1,
        reply:"Reply",
    },
    {
        person_profile: "https://yt3.ggpht.com/yti/AGOGRCqcrgNc6UxnPBkrLEtAlIddGQ9bdjkR3kFuGwli=s88-c-k-c0x00ffffff-no-rj",
        alt:"profile-logo",
        person_email:"@gowthammarisetti1705",
        comment:"Very good input for option traders.  Pl let us know - how to decide whether we have to go for FUTURES buy or sell at the beginning of month? so that we can take the opposite PE/CE positions.",
        likes:5,
        dislikes:1,
        reply:"Reply",
    },
    {
        person_profile:"https://yt3.ggpht.com/yti/AGOGRCqcrgNc6UxnPBkrLEtAlIddGQ9bdjkR3kFuGwli=s88-c-k-c0x00ffffff-no-rj",
        alt:"profile-logo",
        person_email:"@gowthammarisetti1705",
        comment:"Very good input for option traders.  Pl let us know - how to decide whether we have to go for FUTURES buy or sell at the beginning of month? so that we can take the opposite PE/CE positions.",
        likes:5,
        dislikes:1,
        reply:"Reply",
    },
    {
        person_profile:"https://yt3.ggpht.com/yti/AGOGRCqcrgNc6UxnPBkrLEtAlIddGQ9bdjkR3kFuGwli=s88-c-k-c0x00ffffff-no-rj",
        alt:"profile-logo",
        person_email:"@gowthammarisetti1705",
        comment:"Very good input for option traders.  Pl let us know - how to decide whether we have to go for FUTURES buy or sell at the beginning of month? so that we can take the opposite PE/CE positions.",
        likes:5,
        dislikes:1,
        reply:"Reply",
    },
    {
        person_profile:"https://yt3.ggpht.com/yti/AGOGRCqcrgNc6UxnPBkrLEtAlIddGQ9bdjkR3kFuGwli=s88-c-k-c0x00ffffff-no-rj",
        alt:"profile-logo",
        person_email:"@gowthammarisetti1705",
        comment:"Very good input for option traders.  Pl let us know - how to decide whether we have to go for FUTURES buy or sell at the beginning of month? so that we can take the opposite PE/CE positions.",
        likes:5,
        dislikes:1,
        reply:"Reply",
    },
];

function renderReview() {
  var review_section = document.querySelector('.comment-review');

  if (!review_section) {
    console.error("Review section not found");
    return;
  }

  var comment_review = review_section.querySelector('.comment-review');

  if (!comment_review) {
    // If 'comment-review' element is not found, create it
    comment_review = document.createElement('div');
    comment_review.className = 'comment-review';
    review_section.appendChild(comment_review);
  }

  let html = '';

  Feedback.forEach((c) => {
    html += `<div class="first-comment">
        <div class="first-prsn-prfl">
            <img src="${c.person_profile}" alt="${c.alt}">
        </div>
        <div class="person-details">
            <div class="person-email">
                <span>${c.person_email}</span>
            </div>
            <div class="comment">
                <p>${c.comment}</p>
            </div>
            <div class="likes-dislikes">
                <img src="./img/like (1).png" alt="like">
                <span>3</span>
                <img src="./img/thumbs-down-.png" alt="dislike">
                <span>${c.reply}</span>
            </div>
        </div>
    </div>`;
  });

  comment_review.innerHTML = html;
}

// Call the function when the document is ready
document.addEventListener('DOMContentLoaded', renderReview);




