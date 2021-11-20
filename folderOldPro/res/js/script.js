$(function () {
	profileInformation();
	loadPosts();

});

function profileInformation() {
    $('.user-container img').click(function () {
        $(this).siblings('.drop-down-container').toggle()
    })
}

function loadPosts() {
    $.get("https://api.npoint.io/c48d21c16fe58944166e", function(posts) {
        for (post of posts) {
            let postContainer = $('<div class = "box">');
            let postPic = $('<div class="picPost">')
            let postFooter = $('<div class="postFooter">').text(post.post.signature);
            let createTime = $('<div class="postHeader">').text(post.post_header.timestamp);
            let authorName = $('<p class="autor">').text(post.post_header.author.firstName + " " + post.post_header.author.lastName);
            createTime.append(authorName);
            postContainer.append(createTime);
            if (post.post.image != null) {
                let img = $('<img>')
                	.attr('src', post.post.image)
                	.attr('alt', post.post.imageText);
            	postPic.append(img);
            	postContainer.append(postPic);
            }
            postContainer.append(postFooter);
            $('.main-container').append(postContainer)
        }
    })
}