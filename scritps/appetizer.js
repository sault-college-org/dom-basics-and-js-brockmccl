const Appetizer = () => {


    //add each header and p to a div put those into a div have a seperate div for the header seperate from the flex one
    const appetizer = document.createElement('div');
    appetizer.setAttribute('class', 'container');
    appetizer.setAttribute('id', 'test');
    
    appetizer.style.display = "flex";
    

    const appetizerHeader = document.createElement('h1');
    appetizerHeader.setAttribute('class', 'text-center my-3 pt-5 mb-5');
    appetizerHeader.innerHTML = 'APPETIZERS';

    

    const appetizer1 = document.createElement('h1');
    appetizer1.setAttribute('id', 'appetizer1');
    appetizer1.setAttribute('class', 'text-center');
    appetizer1.innerHTML = 'SALAD';
        
    const appetizerParagraph1 = document.createElement('p');
    appetizerParagraph1.setAttribute('class', 'my-3 pb-3');
    appetizerParagraph1.innerHTML = 'Fresh Lettuce Topped with Grilled Peaches.';
        

    const appetizer2 = document.createElement('h1');
    appetizer2.setAttribute('id', 'appetizer2');
    appetizer2.setAttribute('class', 'text-center');
    appetizer2.innerHTML = 'SOUP';
        

    const appetizerParagraph2 = document.createElement('p');
    appetizerParagraph2.setAttribute('class', 'my-3 pb-3');
    appetizerParagraph2.innerHTML = 'A Slow Boiled Seafood Broth with Shrimp and Potatoes.';
    

    const appetizer3 = document.createElement('h1');
    appetizer3.setAttribute('id', 'appetizer3');
    appetizer3.setAttribute('class', 'text-center');
    appetizer3.innerHTML = 'BREAD';


    const appetizerParagraph3 = document.createElement('p');
    appetizerParagraph3.setAttribute('class', 'my-3 pb-3');
    appetizerParagraph3.innerHTML = "Fresh Bread Baked Daily In-House.";
        

        


    appetizer.appendChild(appetizerHeader);
    appetizer.appendChild(appetizer1);
    appetizer.appendChild(appetizerParagraph1);
    appetizer.appendChild(appetizer2);
    appetizer.appendChild(appetizerParagraph2);
    appetizer.appendChild(appetizer3);
    appetizer.appendChild(appetizerParagraph3);

    return appetizer;
};

export default Appetizer;