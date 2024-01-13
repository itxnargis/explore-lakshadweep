document.addEventListener('DOMContentLoaded', function () {
    // ********** close links ************
    const navToggle = document.querySelector('.nav-toggle');
    const linksContainer = document.querySelector('.links-container');
    const links = document.querySelector('.links');

    navToggle.addEventListener('click', function () {
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const linksHeight = links.getBoundingClientRect().height;
        if (containerHeight === 0) {
            linksContainer.style.height = `${linksHeight}px`;
        } else {
            linksContainer.style.height = 0;
        }
    });

    const navbar = document.getElementById("nav");
    const topLink = document.querySelector('.top-link');

    // ********** fixed navbar ************
    window.addEventListener('scroll', function () {
        const scrollHeight = window.pageYOffset;
        const navHeight = navbar.getBoundingClientRect().height;

        if (scrollHeight > navHeight) {
            navbar.classList.add('fixed-nav');
        } else {
            navbar.classList.remove('fixed-nav');
        }

        if (scrollHeight > 500) {
            topLink.classList.add('show-link');
        } else {
            topLink.classList.remove('show-link');
        }
    });

    // ********** smooth scroll ************
    const scrollLinks = document.querySelectorAll('.scroll-link');
    scrollLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const id = e.currentTarget.getAttribute("href").slice(1);
            const element = document.getElementById(id);

            const navHeight = navbar.getBoundingClientRect().height;
            const containerHeight = linksContainer.getBoundingClientRect().height;
            const fixedNav = navbar.classList.contains('fixed-nav');
            let position = element.offsetTop - navHeight;

            if (!fixedNav) {
                position = position - navHeight;
            }
            if (navHeight > 82) {
                position = position + containerHeight;
            }

            window.scrollTo({
                left: 0,
                top: position,
            });
            linksContainer.style.height = 0;
        });
    });

    // ********** FAQ Section ************
    const questions = document.querySelectorAll('.question');

    questions.forEach(function (question) {
        const btn = question.querySelector('.question-btn');

        btn.addEventListener('click', function () {
            questions.forEach(function (item) {
                if (item !== question) {
                    item.classList.remove('show-text');
                }
            });
            question.classList.toggle('show-text');
        });
    });

    // ********** Share Section ************
    const shareButton = document.querySelector('button[type="button"] .share-icon');

    const icon = shareButton ? shareButton.querySelector('.share-icon') : null;
    const canonical = document.querySelector('link[rel="canonical"]');

    // Find out if the user is on a device made by Apple.
    const IS_MAC = /Mac|iPhone/.test(navigator.platform);
    // Find out if the user is on a Windows device.
    const IS_WINDOWS = /Win/.test(navigator.platform);
    // For Apple devices or Windows, use the platform-specific share icon.
    if (icon) {
        icon.classList.add(`share${IS_MAC ? 'mac' : (IS_WINDOWS ? 'windows' : '')}`);
    }

    if (shareButton) {
        shareButton.addEventListener('click', async () => {
            const title = document.title;
            const text = document.title;
            const url = canonical?.href || location.href;

            if ('share' in navigator) {
                try {
                    await navigator.share({
                        url,
                        text,
                        title,
                    });
                    return;
                } catch (err) {
                    if (err.name !== "AbortError") {
                        console.error(err.name, err.message);
                    }
                }
            }

            const shareURL = new URL('https://twitter.com/intent/tweet');
            const params = new URLSearchParams();
            params.append('text', text);
            params.append('url', url);
            shareURL.search = params;
            window.open(shareURL, '_blank', 'popup,noreferrer,noopener');
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    // ********** close links ************
    const navToggle = document.querySelector('.nav-toggle');
    const linksContainer = document.querySelector('.links-container');
    const links = document.querySelector('.links');

    navToggle.addEventListener('click', function () {
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const linksHeight = links.getBoundingClientRect().height;
        if (containerHeight === 0) {
            linksContainer.style.height = `${linksHeight}px`;
        } else {
            linksContainer.style.height = 0;
        }
    });

    const navbar = document.getElementById("nav");
    const topLink = document.querySelector('.top-link');

    // ********** fixed navbar ************
    window.addEventListener('scroll', function () {
        const scrollHeight = window.pageYOffset;
        const navHeight = navbar.getBoundingClientRect().height;

        if (scrollHeight > navHeight) {
            navbar.classList.add('fixed-nav');
        } else {
            navbar.classList.remove('fixed-nav');
        }

        if (scrollHeight > 500) {
            topLink.classList.add('show-link');
        } else {
            topLink.classList.remove('show-link');
        }
    });

    // ********** smooth scroll ************
    const scrollLinks = document.querySelectorAll('.scroll-link');
    scrollLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const id = e.currentTarget.getAttribute("href").slice(1);
            const element = document.getElementById(id);

            const navHeight = navbar.getBoundingClientRect().height;
            const containerHeight = linksContainer.getBoundingClientRect().height;
            const fixedNav = navbar.classList.contains('fixed-nav');
            let position = element.offsetTop - navHeight;

            if (!fixedNav) {
                position = position - navHeight;
            }
            if (navHeight > 82) {
                position = position + containerHeight;
            }

            window.scrollTo({
                left: 0,
                top: position,
            });
            linksContainer.style.height = 0;
        });
    });

    // ********** FAQ Section ************
    const questions = document.querySelectorAll('.question');

    questions.forEach(function (question) {
        const btn = question.querySelector('.question-btn');

        btn.addEventListener('click', function () {
            questions.forEach(function (item) {
                if (item !== question) {
                    item.classList.remove('show-text');
                }
            });
            question.classList.toggle('show-text');
        });
    });

    // ********** Share Section ************
    const shareButton = document.querySelector('button[type="button"]');
    const icon = shareButton ? shareButton.querySelector('.icon') : null;
    const canonical = document.querySelector('link[rel="canonical"]');

    // Find out if the user is on a device made by Apple.
    const IS_MAC = /Mac|iPhone/.test(navigator.platform);
    // Find out if the user is on a Windows device.
    const IS_WINDOWS = /Win/.test(navigator.platform);
    // For Apple devices or Windows, use the platform-specific share icon.
    if (icon) {
        icon.classList.add(`share${IS_MAC ? 'mac' : (IS_WINDOWS ? 'windows' : '')}`);
    }

    if (shareButton) {
        shareButton.addEventListener('click', async () => {
            const title = document.title;
            const text = document.title;
            const url = canonical?.href || location.href;

            if ('share' in navigator) {
                try {
                    await navigator.share({
                        url,
                        text,
                        title,
                    });
                    return;
                } catch (err) {
                    if (err.name !== "AbortError") {
                        console.error(err.name, err.message);
                    }
                }
            }

            const shareURL = new URL('https://twitter.com/intent/tweet');
            const params = new URLSearchParams();
            params.append('text', text);
            params.append('url', url);
            shareURL.search = params;
            window.open(shareURL, '_blank', 'popup,noreferrer,noopener');
        });
    }
});
