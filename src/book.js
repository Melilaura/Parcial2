import { getDatabase, ref, set, onValue, push } from 'firebase/database';


export class bookCard{

    //objeto
    constructor(book)
    {
        this.book = book;
    }

    // dibujar la tarjeta
    draw(){
        let card = document.createElement("div");
        card.className = "book";

        //titulo del libro
        let bookTitle = document.createElement("h1");
        bookTitle.className = "bookTitle";
        bookTitle.innerHTML = this.book.TITLE;

        //rating del libro
        let bookRating = document.createElement("p");
        bookRating.className = "bookRating";
        bookRating.innerHTML = this.book.RATING;

        // gente que ha votado
        /*let bookVotes = document.createElement("p");
        bookVotes.className = "bookVotes";
        bookVotes.innerHTML = this.book.ACTUALVOTES;*/

        
        // votos
        /*let BookVote = document.createElement("p");
        BookVote.className = "BookVote";
        BookVote.innerHTML = this.book.VOTES;*/
        

        //crear los botones de votacion
        let v1 = document.createElement("button");
        let v2 = document.createElement("button");
        let v3 = document.createElement("button");
        let v4 = document.createElement("button");
        let v5 = document.createElement("button");

        v1.className = "v1Button";
        v2.className = "v2Button";
        v3.className = "v3Button";
        v4.className = "v4Button";
        v5.className = "v5Button";

        //Texto de los botones
        v1.innerHTML = "1";
        v2.innerHTML = "2";
        v3.innerHTML = "3";
        v4.innerHTML = "4";
        v5.innerHTML = "5";


        //votacion 1 estrellita
        v1.addEventListener("click", (e, event) =>
        {
            const db = getDatabase();

                  //variables digamos
                  const BookRating = ref(db, "books/" + this.book.TITLE + "/" + "RATING");
                  const BookVote = ref(db, "books/" + this.book.TITLE + "/" + "VOTE");
                  const BookVotes = ref(db, "books/" + this.book.TITLE + "/" + "ACTUALVOTES");
            
            //cantidad de gente que ha votado
            this.book.ACTUALVOTES += 1;

            //cantidad de votos
            this.book.VOTE += 1;

            //rating
            this.book.RATING = (this.book.VOTE /this.book.ACTUALVOTES).toFixed(1);

            //actualizar variables
            set(BookVote, this.book.VOTE);
            set(BookRating, this.book.RATING);
            set(BookVotes, this.book.ACTUALVOTES);
        });

        
        //votacion 2 estrellita
        v2.addEventListener("click", (e, event) =>
        {
            const db = getDatabase();

                //variables digamos
                const BookRating = ref(db, "books/" + this.book.TITLE + "/" + "RATING");
                const BookVote = ref(db, "books/" + this.book.TITLE + "/" + "VOTE");
                const BookVotes = ref(db, "books/" + this.book.TITLE + "/" + "ACTUALVOTES");
            
            //cantidad de gente que ha votado
            this.book.ACTUALVOTES += 1; 

            //cantidad de votos      
            this.book.VOTE += 2;

            //rating total
            this.book.RATING = (this.book.VOTE / this.book.ACTUALVOTES).toFixed(1);

            //actualizar variables
            set(BookVote, this.book.VOTE);
            set(BookRating, this.book.RATING);
            set(BookVotes, this.book.ACTUALVOTES);
        });

        //votacion 3 estrellita
        v3.addEventListener("click", (e, event) =>
        {
            const db = getDatabase();

                   //variables digamos
                   const BookRating = ref(db, "books/" + this.book.TITLE + "/" + "RATING");
                   const BookVote = ref(db, "books/" + this.book.TITLE + "/" + "VOTE");
                   const BookVotes = ref(db, "books/" + this.book.TITLE + "/" + "ACTUALVOTES");
            
            //gente que ha botado
            this.book.ACTUALVOTES += 1;      
            
            //cantidad de votos
            this.book.VOTE += 3;

            //rating total
            this.book.RATING = (this.book.VOTE / this.book.ACTUALVOTES).toFixed(1);

            //actualizar variables
            set(BookVote, this.book.VOTE);
            set(BookRating, this.book.RATING);
            set(BookVotes, this.book.ACTUALVOTES);
        });

        
        //votacion 4 estrellita
        v4.addEventListener("click", (e, event) =>
        {
            const db = getDatabase();

            //variables digamos
            const BookRating = ref(db, "books/" + this.book.TITLE + "/" + "RATING");
            const BookVote = ref(db, "books/" + this.book.TITLE + "/" + "VOTE");
            const BookVotes = ref(db, "books/" + this.book.TITLE + "/" + "ACTUALVOTES");
            
            //gente que ha votado
            this.book.ACTUALVOTES += 1;   
            
            //cantidad  de votos
            this.book.VOTE += 4;

            //rating
            this.book.RATING = (this.book.VOTE / this.book.ACTUALVOTES).toFixed(1);

            //actualizar variables
            set(BookVote, this.book.VOTE);
            set(BookRating, this.book.RATING);
            set(BookVotes, this.book.ACTUALVOTES);
        });


        //votacion 5 estrellita
        v5.addEventListener("click", (e, event) =>
        {
            const db = getDatabase();

       //variables digamos
       const BookRating = ref(db, "books/" + this.book.TITLE + "/" + "RATING");
       const BookVote = ref(db, "books/" + this.book.TITLE + "/" + "VOTE");
       const BookVotes = ref(db, "books/" + this.book.TITLE + "/" + "ACTUALVOTES");
            
            //gente que a votado
            this.book.ACTUALVOTES += 1; 

            //cantidad de votos
            this.book.VOTE += 5;

            //ranting
            this.book.RATING = (this.book.VOTE / this.book.ACTUALVOTES).toFixed(1);

            //actualizar variables
            set(BookVote, this.book.VOTE);
            set(BookRating, this.book.RATING);
            set(BookVotes, this.book.ACTUALVOTES);
        });


        //appendChilds
        card.appendChild(bookTitle);
        card.appendChild(bookRating);

        card.appendChild(v1);
        card.appendChild(v2);
        card.appendChild(v3);
        card.appendChild(v4);
        card.appendChild(v5);

        return card;

        /////////
    }


}



