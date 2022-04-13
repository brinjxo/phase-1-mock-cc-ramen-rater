// write your code here
fetch ('http://localhost:3000'+ '/ramens')
.then ((resp)=> resp.json())
.then((data)=> renderRamen(data))
const mainUrl = 'http://localhost:3000';
// array of ramen names 
//1. See all ramen images in the div with the id of ramen-menu. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.
const ramenMenu = document.querySelector('#ramen-menu');

function renderRamen(data){
    data.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.details = ramen;
        img.ramenId = ramen.id;
        ramenMenu.append(img);
        
        img.addEventListener('click', showDetails)
    });
}
function showDetails(e){
    //console.log(e.target.details.name);
    let ramen = e.target.details

    const ramenName= document.querySelector('.name');
    ramenName.innerText= ramen.name;

    const detailImg = document.querySelector('.detail-image');
    detailImg.src =ramen.image;

    const restaurant = document.querySelector('.restaurant');
    restaurant.innerText = ramen.restaurant

    const rating = document.querySelector('#rating-display');
    rating.innerText = ramen.rating;
    
    const comment = document.querySelector('#comment-display');
    comment.innerText = ramen.comment;

}
function createRamen(e){
    e.preventDefault();
    const name =document.querySelector('#new-name').value
    const restaurant=document.querySelector('#new-resturant').value
    const image=document.querySelector('#new-image').value
    const rating=document.querySelector('#new-rating').value
    const comment=document.querySelector('#new-comment').value
    
}

//2. Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.
// add an event listener to renderRamen in order to click on image - connect info from ramen-detail div

//3. Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.
