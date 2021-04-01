
let bookCover = document.getElementById('bookCover');

bookCover.addEventListener('mouseover',
    function () {
        this.src ='/home/agnes/Documents/Javascript-Partie2/images/image1_2.jpg';
    }
);

bookCover.addEventListener('mouseout', function () {
    this.src='/home/agnes/Documents/Javascript-Partie2/images/image1.jpg';
    }
);
