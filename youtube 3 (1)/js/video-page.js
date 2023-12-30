




var Feedback = 
[
    {
        person_profile:"https://yt3.ggpht.com/yti/AGOGRCqcrgNc6UxnPBkrLEtAlIddGQ9bdjkR3kFuGwli=s88-c-k-c0x00ffffff-no-rj" alt="profile-logo">,
        person_email:"<span>@gowthammarisetti1705</span>",
        comment:"<p>Very good input for option traders.  Pl let us know - how to decide whether we have to go for FUTURES buy or sell at the beginning of month? so that we can take the opposite PE/CE positions.</p>",
        likes:"<img src=\"./img/like (1).png\"alt=\"like\">",
        dislikes:"<img src=\"./img/thumbs-down-.png\" alt=\"dislike\">",
        reply:"<span>Reply</span>",
    },
    {
        person_profile:src="https://yt3.ggpht.com/yti/AGOGRCqcrgNc6UxnPBkrLEtAlIddGQ9bdjkR3kFuGwli=s88-c-k-c0x00ffffff-no-rj" alt="profile-logo">,
        person_email:"<span>@gowthammarisetti1705</span>",
        comment:"<p>Very good input for option traders.  Pl let us know - how to decide whether we have to go for FUTURES buy or sell at the beginning of month? so that we can take the opposite PE/CE positions.</p>",
        likes:"<img src=\"./img/like (1).png\"alt=\"like\">",
        dislikes:"<img src=\"./img/thumbs-down-.png\" alt=\"dislike\">",
        reply:"<span>Reply</span>",
    },
    {
        person_profile:src="https://yt3.ggpht.com/yti/AGOGRCqcrgNc6UxnPBkrLEtAlIddGQ9bdjkR3kFuGwli=s88-c-k-c0x00ffffff-no-rj" alt="profile-logo">,
        person_email:"<span>@gowthammarisetti1705</span>",
        comment:"<p>Very good input for option traders.  Pl let us know - how to decide whether we have to go for FUTURES buy or sell at the beginning of month? so that we can take the opposite PE/CE positions.</p>",
        likes:"<img src=\"./img/like (1).png\"alt=\"like\">",
        dislikes:"<img src=\"./img/thumbs-down-.png\" alt=\"dislike\">",
        reply:"<span>Reply</span>",
    },
    {
        person_profile: src="https://yt3.ggpht.com/yti/AGOGRCqcrgNc6UxnPBkrLEtAlIddGQ9bdjkR3kFuGwli=s88-c-k-c0x00ffffff-no-rj" alt="profile-logo">,
        person_email:"<span>@gowthammarisetti1705</span>",
        comment:"<p>Very good input for option traders.  Pl let us know - how to decide whether we have to go for FUTURES buy or sell at the beginning of month? so that we can take the opposite PE/CE positions.</p>",
        likes:"<img src=\"./img/like (1).png\"alt=\"like\">",
        dislikes:"<img src=\"./img/thumbs-down-.png\" alt=\"dislike\">",
        reply:"<span>Reply</span>",
    },
    {
        person_profile: src="https://yt3.ggpht.com/yti/AGOGRCqcrgNc6UxnPBkrLEtAlIddGQ9bdjkR3kFuGwli=s88-c-k-c0x00ffffff-no-rj" alt="profile-logo">,
        person_email:"<span>@gowthammarisetti1705</span>",
        comment:"<p>Very good input for option traders.  Pl let us know - how to decide whether we have to go for FUTURES buy or sell at the beginning of month? so that we can take the opposite PE/CE positions.</p>",
        likes:"<img src=\"./img/like (1).png\"alt=\"like\">",
        dislikes:"<img src=\"./img/thumbs-down-.png\" alt=\"dislike\">",
        reply:"<span>Reply</span>",
    },
    {
        person_profile: src="https://yt3.ggpht.com/yti/AGOGRCqcrgNc6UxnPBkrLEtAlIddGQ9bdjkR3kFuGwli=s88-c-k-c0x00ffffff-no-rj" alt="profile-logo">,
        person_email:"<span>@gowthammarisetti1705</span>",
        comment:"<p>Very good input for option traders.  Pl let us know - how to decide whether we have to go for FUTURES buy or sell at the beginning of month? so that we can take the opposite PE/CE positions.</p>",
        likes:"<img src=\"./img/like (1).png\"alt=\"like\">",
        dislikes:"<img src=\"./img/thumbs-down-.png\" alt=\"dislike\">",
        reply:"<span>Reply</span>",
    },
    {
        person_profile:src="https://yt3.ggpht.com/yti/AGOGRCqcrgNc6UxnPBkrLEtAlIddGQ9bdjkR3kFuGwli=s88-c-k-c0x00ffffff-no-rj" alt="profile-logo">,
        person_email:"<span>@gowthammarisetti1705</span>",
        comment:"<p>Very good input for option traders.  Pl let us know - how to decide whether we have to go for FUTURES buy or sell at the beginning of month? so that we can take the opposite PE/CE positions.</p>",
        likes:"<img src=\"./img/like (1).png\"alt=\"like\">",
        dislikes:"<img src=\"./img/thumbs-down-.png\" alt=\"dislike\">",
        reply:"<span>Reply</span>",
    },
];

function renderReview()
{
    var review_section = document.getElementsByClassName('review-section')[0];
    console.log(review_section);

    var comment_review = review_section.querySelector('comment-review');
    console.log(comment_review);

    let html = '';

    Feedback.foreach((c) =>  {
        html +=` <div class="comment-review">
        <div class="first-comment">
          <div class="first-prsn-prfl">
            <img src="${c.person_profile}" alt="">
          </div>
          <div class="person-details">
            <div class="person-email">
              <span>${c.person_email}</span>
            </div>
            <div class="comment">
              <p>${c.comment}</p>
            </div>
            <div class="likes-dislikes">
              <img src="${c.likes}g"alt="like">
              <span>3</span>
              <img src=".${c.dislikes}" alt="dislike">
              <span>${c.reply}</span>
            </div>

          </div>
        </div>
      </div>`;
    });

    comment_review.innerHTML = html;

}

renderReview();


