const drag = () => {
    const forms = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        forms.forEach(form => {
            form.addEventListener(eventName, (e) => {
                e.preventDefault();
                e.stopPropagation();
            });
        });
    });

    function highlight (item) {
        item.closest('.file_upload').style.border = 'solid 3px black';
        item.closest('.file_upload').style.backgroundColor = '#fff';
    }

    function offlight (item) {
        item.closest('.file_upload').style.border = '';
        item.closest('.file_upload').style.backgroundColor = '';
    }


    ['dragenter', 'dragover'].forEach(eventName => {
        forms.forEach(form => {
            form.addEventListener(eventName, () => {
                highlight(form);
            });
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        forms.forEach(form => {
            form.addEventListener(eventName, () => {
                offlight(form);
            });
        });
    });

    forms.forEach(form => {
        form.addEventListener('drop', (e) => {
            form.files = e.dataTransfer.files;

            let dots;
            form.files[0].name.split('.')[0].length > 5 ? dots = "..." : dots = '.';
            const name = form.files[0].name.split('.')[0].substring(0, 6) + dots + form.files[0].name.split('.')[1];
            form.previousElementSibling.textContent = name;
        })
    })
};

export default drag;

