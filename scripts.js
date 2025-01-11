let noLoveClickCount = 0;

function loveButtonClick() {
    document.getElementById('bearImage').src = 'https://i.pinimg.com/originals/36/a0/ae/36a0aec90777a008b7bce6748922169a.gif';
    document.getElementById('bearImage').style.transform = 'scale(1.2)';
    document.getElementById('loveButton').style.display = 'none';
    document.getElementById('noLoveButton').style.display = 'none';
    document.getElementById('message3').style.display = 'block'; // ข้อความเมื่อกด "รักพี่พีที่สุดเลย"
}

function noLoveButtonClick() {
    noLoveClickCount++;
    let button = document.getElementById('noLoveButton');
    let loveButton = document.getElementById('loveButton');
    if (noLoveClickCount >= 10) {
        button.style.display = 'none';
        loveButton.style.display = 'none';
        document.getElementById('bearImage').src = 'https://scontent.xx.fbcdn.net/v/t1.15752-9/471806486_28989019614018623_2099016013584945356_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=OHKVFJbCzEMQ7kNvgHcQyX7&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gEsaJqW4RqokjWbjoqNS7r_xVow331hoCgirET0PKCf3g&oe=67AA01E5'; // เปลี่ยนเป็นรูปหมีโกรธ GIF
        document.getElementById('message').style.display = 'block';
        document.getElementById('message2').style.display = 'block'; // ข้อความเมื่อกด "ไม่รักเธอหรอก!" ครบ 10 ครั้ง
    } else {
        let container = button.parentElement;
        let containerRect = container.getBoundingClientRect();
        let x = Math.random() * (containerRect.width - button.offsetWidth);
        let y = Math.random() * (containerRect.height - button.offsetHeight);
        x = Math.max(0, Math.min(x, containerRect.width - button.offsetWidth));
        y = Math.max(0, Math.min(y, containerRect.height - button.offsetHeight));
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
        button.style.transform = `rotate(${Math.random() * 360}deg)`;
    }
}
