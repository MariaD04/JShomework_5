const interests = document.querySelectorAll('.interests_active');

interests.forEach(element => {
    let mainCheckbox = element.closest('li').querySelector('label input[type="checkbox"]')
    
    mainCheckbox.addEventListener('click', () => {
        let childCheckbox = element.querySelectorAll('li label input[type="checkbox"]')
        childCheckbox.forEach(checkbox => {
            checkbox.checked = mainCheckbox.checked;
        })
    })  
});

