/* Script here */
document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('form');
    
    form.addEventListener('submit', event => {
        
        event.preventDefault();
        const ratingCard = document.querySelector('#ratingCard');
        ratingCard.classList.add('hidden');
        const thanktyou = document.querySelector('#thankyou');
        thanktyou.classList.remove('hidden'); 
        thanktyou.classList.add('center-all');
        const valueContainer = document.querySelector('#ratedValue');
        valueContainer.innerHTML = document.querySelector('input[name=rating]:checked').value;
    })

    const activate = (e) =>
    {
        const radios = document.getElementsByName('rating');
        radios.forEach((radio) => 
        {
            if(!radio.checked) 
            {
                radio.parentElement.classList.remove('active');
            }
        });
        e.target.parentElement.classList.add("active");
    }

    const rateValue = document.getElementsByName('rating');
    rateValue.forEach((input) => {
        input.addEventListener("click", activate);
    })
    
})