document.getElementById('generateBtn').addEventListener('click', function () {
    var badgeType = document.getElementById('badgeType').value;
    var username = document.getElementById('username').value;
    var repository = document.getElementById('repository').value;
    var markdownCode = '';

    switch (badgeType) {
        case 'stars':
            markdownCode = `![Stars](https://img.shields.io/github/stars/${username}/${repository})`;
            break;
        case 'forks':
            markdownCode = `![Forks](https://img.shields.io/github/forks/${username}/${repository})`;
            break;
        case 'watchers':
            markdownCode = `![Watchers](https://img.shields.io/github/watchers/${username}/${repository})`
            break
        case 'license':
            markdownCode = `[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/${username}/${repository}?tab=MIT-1-ov-file#readme)`
            break
        case 'release':
            markdownCode = `![GitHub Release](https://img.shields.io/github/v/release/${username}/${repository})`
            break
    }

    document.getElementById('markdownCode').textContent = markdownCode;
});

document.getElementById('copyBtn').addEventListener('click', function () {
    var markdownCode = document.getElementById('markdownCode').textContent;
    navigator.clipboard.writeText(markdownCode).then(function () {
        alert('Markdown code copied to clipboard!');
    }, function (err) {
        console.error('Could not copy text: ', err);
    });
});