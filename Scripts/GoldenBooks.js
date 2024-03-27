


function Book(title, author, genre, synopsis, imgIdxDefault) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.synopsis = synopsis;
    this.imgIdxDefault = imgIdxDefault;  
}  



function BookOperations() {
    this.getBookList = function () {
        return JSON.parse(localStorage.getItem('bookList')) ||  [new Book("Shadow And Bone", "Leigh Bardugo", "Fiction", synopsis = `Alina Starkov doesn't 
                                                                                     expect much from life.  
                                                                                     Orphaned by the Border 
                                                                                     Wars, she is sure of only 
                                                                                     one thing: her best friend
                                                                                     -- Mal -- and her inconvenient 
                                                                                     crush on him.  Until the day 
                                                                                     their army regiment enters the 
                                                                                     Fold, a swath of unnatural 
                                                                                     darkness crawling with monsters.
                                                                                     When their convoy is attacked and
                                                                                     Mal is brutally injured, Aline 
                                                                                     reveals a dormant power not even 
                                                                                     she knew existed. 
                                                                                     Ripped from everything she knows, 
                                                                                     Alina is taken to the royal court
                                                                                     to be trained as a member of the 
                                                                                     Grisha, the magical elite led by 
                                                                                     the mysterious Darkling.  With Alina's 
                                                                                     extraordinary power in his arsenal, 
                                                                                     he believes that he can finally 
                                                                                     destroy the Fold.  Now Alina must 
                                                                                     find a way to master her untamed gift
                                                                                     and somehow fit into her new life 
                                                                                     without Mal by her side.  But nothing in this 
                                                                                     lavish world is what it seems.  
                                                                                     As the threat to the kingdom mounts 
                                                                                     and her dangerous attraction to the 
                                                                                     Darkling grows, Alina will uncover a 
                                                                                     secret that could tear her heart 
                                                                                     -- and her country -- in two.`, 0),
                    new Book("Siege And Storm", "Leigh Bardugo", "Fiction", synopsis = `Hunted across the True Sea, 
                                                                                        haunted by the lives she took 
                                                                                        on the Fold, Alina must try to
                                                                                        make a life with Mal in an unfamiliar
                                                                                        land. She finds starting new is not easy 
                                                                                        while keeping her identity as the Sun
                                                                                        Summoner a secret. She can’t outrun
                                                                                        her past or her destiny for long.The Darkling
                                                                                         has emerged from the Shadow Fold 
                                                                                         with a terrifying new power and a
                                                                                         dangerous plan that will test the
                                                                                         very boundaries of the natural
                                                                                         world. With the help of a notorious 
                                                                                         privateer, Alina returns to the
                                                                                         country she abandoned, determined 
                                                                                         to fight the forces gathering against Ravka.
                                                                                         But as her power grows, Alina slips deeper 
                                                                                         into the Darkling’s game of forbidden magic, 
                                                                                         and farther away from Mal. Somehow,
                                                                                         she will have to choose between her 
                                                                                         country, her power, and the love she 
                                                                                         always thought would guide her–or risk losing
                                                                                         everything to the oncoming storm. `, 0),
                    new Book("Ruin And Rising", "Leigh Bardugo", "Fiction", synopsis = `The capital has fallen. The Darkling rules Ravka from his 
                                                                                        shadow throne.Now the nation's fate rests with a broken Sun 
                                                                                        Summoner, a disgraced tracker, and the shattered remnants of 
                                                                                        a once-great magical army.Deep in an ancient network of tunnels 
                                                                                        and caverns, a weakened Alina must submit to the dubious 
                                                                                        protection of the Apparat and the zealots who worship her as a 
                                                                                        Saint. Yet her plans lie elsewhere, with the hunt for the elusive
                                                                                        firebird and the hope that an outlaw prince still survives.Alina Starkov 
                                                                                        will have to forge new alliances and put aside old rivalries as she and Mal
                                                                                        race to find the last of Morozova's amplifiers. But as she begins to unravel
                                                                                        the Darkling's secrets, she reveals a past that will forever alter her understanding 
                                                                                        of the bond they share and the power she wields. The firebird
                                                                                        is the one thing that stands between Ravka and destruction—and 
                                                                                        claiming it could cost Alina the very future she’s fighting for.`, 0),
                    new Book("King Of Scars", "Leigh Bardugo", "Fiction", synopsis = `Face your demons… or feed them. The dashing young king, Nikolai Lantsov, 
                                                                                      has always had a gift for the impossible. No one knows what he endured in 
                                                                                      his country’s bloody civil war–and he intends to keep it that way. Now, as 
                                                                                      enemies gather at his weakened borders, Nikolai must find a way to refill 
                                                                                      Ravka’s coffers, forge new alliances, and stop a rising threat to the once-great 
                                                                                      Grisha Army. Yet with every day a dark magic within him grows stronger, threatening
                                                                                      to destroy all he has built. With the help of a young monk and a legendary Grisha 
                                                                                      general, Nikolai will journey to the places in Ravka where the deepest magic survives 
                                                                                      to vanquish the terrible legacy inside him. He will risk everything to save his country 
                                                                                      and himself. But some secrets aren’t meant to stay buried–and some wounds aren’t meant to heal.`, 0),
                    new Book("Rule Of Wolves", "Leigh Bardugo", "Fiction", synopsis = `The Demon King. As Fjerda's massive army prepares to invade, Nikolai Lantsov will summon every 
                                                                                       bit of his ingenuity and charm - and even the monster within - to win this fight. But a dark threat 
                                                                                       looms that cannot be defeated by a young king's gift for the impossible.
                                                                                       The Stormwitch. Zoya Nazyalensky has lost too much to war. She saw her mentor die and her worst enemy 
                                                                                       resurrected, and she refuses to bury another friend. Now duty demands she embrace her powers to become 
                                                                                       the weapon her country needs. No matter the cost.
                                                                                       The Queen of Mourning. Deep undercover, Nina Zenik risks discovery and death as she wages war on Fjerda 
                                                                                       from inside its capital. But her desire for revenge may cost her country its chance at freedom and Nina 
                                                                                       the chance to heal her grieving heart.
                                                                                       King. General. Spy. Together they must find a way to forge 
                                                                                       a future in the darkness. Or watch a nation fall.`, 0),
                    new Book("Six Of Crows", "Leigh Bardugo", "Fiction", synopsis = `Ketterdam: a bustling hub of international trade where anything can be had for the right price and no one 
                                                                                     knows that better than criminal prodigy Kaz Brekker.  Kaz is offered a chance at a deadly heist that could 
                                                                                     make him rich beyond his wildest dreams.  But he can't pull it off alone...
                                                                                     A convict with a thirst for revenge
                                                                                     A sharpshooter who can't walk away from a wager
                                                                                     A runaway with a privileged past
                                                                                     A spy known as the Wraith
                                                                                     A Heartrender using her magic to survive the slums
                                                                                     A thief with a gift for unlikely escapes
                                                                                     Kaz's crew are the only ones who might stand between the world and destruction --
                                                                                     if they don't kill each other first. `, 0),
                    new Book("Crooked Kingdom", "Leigh Bardugo", "Fiction", synopsis = `When you can’t beat the odds, change the game.
                                                                                       Kaz Brekker and his crew have just pulled off a heist so daring even they 
                                                                                       didn't think they'd survive. But instead of divvying up a fat reward, they're 
                                                                                       right back to fighting for their lives. Double-crossed and badly weakened, 
                                                                                       the crew is low on resources, allies, and hope. As powerful forces from around 
                                                                                       the world descend on Ketterdam to root out the secrets of the dangerous drug 
                                                                                       known as jurda parem, old rivals and new enemies emerge to challenge Kaz's 
                                                                                       cunning and test the team's fragile loyalties. A war will be waged on the 
                                                                                       city's dark and twisting streets―a battle for revenge and redemption that will 
                                                                                       decide the fate of the Grisha world.`, 0),
                    new Book("The Language Of Thorns", "Leigh Bardugo", "Fiction", synopsis = `Travel to a world of dark bargains struck by moonlight, of haunted towns 
                                                                                               and hungry woods, of talking beasts and gingerbread golems, where a young 
                                                                                               mermaid's voice can summon deadly storms and where a river might do a lovestruck 
                                                                                               boy's bidding but only for a terrible price.
                                                                                               The six enchanting stories in this collection are lavishly illustrated with art 
                                                                                               that changes with each turn of the page, culminating in six stunning full-spread 
                                                                                               illustrations as rich in detail as the stories themselves.`, 0)];};
    
    this.bookList = this.getBookList(); 

    this.saveBook = function () {
        localStorage.setItem('bookList', JSON.stringify(this.bookList));
    }
    
    
    this.defaultImg = function (randomImg) {
       
        const bookImgNumber = Math.floor(Math.random() * 7) + 1;
        
        return [`/Default_Images/${randomImg}.png`, bookImgNumber];
    }
    
    this.addBook = function () {
        const inputElementTitle = document.querySelector(".title-add");
        const inputElementAuthor = document.querySelector(".author-add");
        const inputElementGenre = document.querySelector(".genre-add");
        const inputElementSynopsis = document.querySelector(".synopsis-add");
        console.log(this.defaultImg(1)[1]);
        let book = [inputElementTitle.value,
            inputElementAuthor.value, 
            inputElementGenre.value,
            inputElementSynopsis.value
            ];
        this.bookList.push(new Book(book[0], book[1], book[2], (book[3] || "No Description Available"), this.defaultImg(1)[1]));
    
        alert(`"${book[0]}" was added successfully`);
        
        this.saveBook();
       
    }
    
    
    this.showBookInfo = function (bookIndex) {
        
        document.querySelector(".js-popup").innerHTML = `<div id = "pop" class="popup-info" style="background: url('../Images/${(bookIndex > 7) ? this.defaultImg(this.bookList[bookIndex].imgIdxDefault)[0] : (bookIndex+1)+".jpeg"}');background-repeat: no-repeat;background-size: 100% 100%;">
                                                              <div class="popup-content">
                                                                  <h1>${this.bookList[bookIndex].title}</h1>
                                                                  <h3>Written by: <i>${this.bookList[bookIndex].author}</i></h3>
                                                                  <button class="genre-btn">${this.bookList[bookIndex].genre} </button>
                                                                  <h4>Synopsis: </h4>
                                                                  <div class="synopsis-section">
                                                                      <p>${this.bookList[bookIndex].synopsis}</p>
                                                                  </div>
                                                                  <p>       
                                                                      <button class="close-btn" onclick = "closePopup();"><a href = "#${bookIndex}">Close</a></button>
                                                                  </p>
                                                               </div>
                                                        </div>`;        
        document.body.classList.toggle("c");
        document.querySelector(".popup-info").classList.add("pop-open"); 
    }
    
    
    this.longPressTimer;
    
    this.startPress = function (index) {
        this.longPressTimer = setTimeout(()=>{this.removeBook(index)}, 500);
    }
    
    this.endPress = function () {
        clearTimeout(this.longPressTimer);
    }
    
    this.removeBook = function (bookIndex) {
        if (bookIndex > 7) {
            let confirmation = confirm(`Are you sure you want to delete " ${this.bookList[bookIndex].title} "?`);
            if (confirmation) {
                this.bookList.splice(bookIndex, 1);
 
                this.renderBooks();
            }
        } else{
            alert("Sorry Cannot Delete Default Book")
        }
        this.saveBook();
    }
    
    this.renderBooks = function () {
        let booksHTML = ``;
        
        for (let i = 0; i < this.bookList.length; i++){
            booksHTML += `<a href = "#pop">
                                <div id="${i}" class="book" onclick = "goldenBooks.showBookInfo(${i})"
                                ontouchstart = "goldenBooks.startPress(${i})"
                                onmousedown = "goldenBooks.startPress(${i})"
                                ontouchend = "goldenBooks.endPress()"
                                onmouseup = "goldenBooks.endPress()">
                                            <img src="Images/${(i > 7) ? this.defaultImg(this.bookList[i].imgIdxDefault)[0] : (i+1)+'.jpeg'}" alt="" width="145" height="180">
                                            <p>${this.bookList[i].title}</p>
                                </div>
                          </a>`;
        }
        
        if (document.querySelector(".js-all-books")) {
            document.querySelector(".js-all-books").innerHTML = booksHTML;
        }
        
    }
    
    this.searchBook = function () {
        let searchResult = [];
        const target = document.querySelector(".search-input").value.trim();
        for (let book of this.bookList) {
            if (book.title.includes(target) || book.author.includes(target) || book.genre.includes(target)) {                
                searchResult.push(book);                
            }
        }
     
        
        const defaultBooks = this.bookList.slice(0, 8);
        let bookContent = "";
        let result = document.querySelector(".search-result-section");
        if (searchResult.length !== 0) {
            document.querySelector(".result-info").innerText = `Search results for "${target}"`;
            for (let bookItem of searchResult) {
               
                bookContent += `<div class="book-result">
                                    <a href="index#${this.bookList.indexOf(bookItem)}" target="_blank"> 
                                        <img src="Images/${(defaultBooks.indexOf(bookItem) !== -1) ? (defaultBooks.indexOf(bookItem) + 1)+'.jpeg' : this.defaultImg(bookItem.imgIdxDefault)[0]}" alt="" width="145" height="180">
                                        <p>${bookItem.title}</p>
                                    </a>
                                </div>`;
            }
            result.innerHTML = bookContent;
        }else {
            document.querySelector(".result-info").innerText =  `No results found for "${target}"`;
            result.innerHTML = "";
        }
    }
    
    
    
    
}



const goldenBooks = new BookOperations();

goldenBooks.renderBooks();


function closePopup() {
    if (document.querySelector(".js-popup")) {
        document.querySelector(".js-popup").innerHTML = ``;   
        document.body.classList.toggle("c");
        document.querySelector(".js-popup").classList.remove("pop-open");
    }
    
}



