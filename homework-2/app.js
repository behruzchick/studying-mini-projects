const downloadButton = document.querySelector('.dowmload');
const main = document.querySelector('.modal-cont');
let container = document.querySelector('.container');

    downloadButton.addEventListener('click', (e) => {
        container.classList.toggle('filtered');
        let modalWindow = document.createElement('div');
        modalWindow.classList.add('modal');
            modalWindow.innerHTML = `
            <div class="header-modal">
              <div class="header-title">
                    <h1>Download movie?</h1>
              </div>
                <div class="close-btn">
                  <button type="button" class="btn-close btn-close-white" aria-label="Close"><h3>X</h3></button>
               </div>
           </div>
           <div class="main-modal">
            <h3>
                
             If you want to download the movie?, then click on the button
            </h3>
           </div>
        <div class="footer-modal">
            <button class="down">DOWNLOAD</button>
            
        </div>
            `
        main.appendChild(modalWindow);
        let cancelBtn = modalWindow.querySelector('.btn-close');
        let downloadBtn = modalWindow.querySelector('.down');
        
            cancelBtn.addEventListener('click', (e) => {
                container.classList.remove('filtered')
                modalWindow.remove();
            })

            downloadBtn.addEventListener('click', (e) => {
                alert('Uzur keyn Qowaman')
            })
    })