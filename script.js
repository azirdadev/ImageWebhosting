document.getElementById('editForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var title = document.getElementById('title').value;
    var icon = document.getElementById('icon').value;
    var description = document.getElementById('description').value;

    document.title = title;
    var iconLink = document.querySelector("link[rel*='icon']") || document.createElement('link');
    iconLink.type = 'image/x-icon';
    iconLink.rel = 'shortcut icon';
    iconLink.href = icon;
    document.head.appendChild(iconLink);

    document.querySelector('meta[name="description"]').setAttribute('content', description);

    alert('Changes saved successfully!');
});
