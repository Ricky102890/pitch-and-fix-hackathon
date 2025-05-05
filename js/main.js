// Main JavaScript for ShopEase

document.addEventListener("DOMContentLoaded", function () {
  // Initialize the site
  initializeSite();

  // Show cart count on load
  updateCartCount();

  // Setup event listeners
  setupEventListeners();
});

// Initialize site functionality
function initializeSite() {
  console.log("ShopEase site initialized");

  const cartIcon = document.querySelector(".cart-icon");
  if (cartIcon) {
    cartIcon.addEventListener("click", toggleCart);
  }

  // Setup newsletter form
  setupNewsletterForm();
}

// Setup event listeners for the site
function setupEventListeners() {
  // Add to cart buttons
  const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      // Get product details
      const productId = this.dataset.productId;
      const productName = this.dataset.productName;
      const productPrice = this.dataset.productPrice;

      addToCart(productId, productName, productPrice);

      // Show success message
      showMessage("Product added to cart!", "success");
    });
  });

  // Setup mobile menu toggle
}

// Show message to user
function showMessage(message, type) {
  // Create message element
  const messageElement = document.createElement("div");
  messageElement.className = `message-${type}`;
  messageElement.textContent = message;

  // Add to body
  document.body.appendChild(messageElement);

  // Fades In
  setTimeout(() => {
    messageElement.classList.add('fade');
  });

  // Fades Out before vanishing
  setTimeout(() => {
    messageElement.classList.remove('fade');
  }, 2000);

  // Remove after 3 seconds
  setTimeout(() => {
    messageElement.remove();
  }, 3000);
}

// Setup newsletter form
function setupNewsletterForm() {
  const newsletterForm = document.getElementById("newsletter-form");
  const newsletterSuccess = document.getElementById("newsletter-success");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const emailInput = document.getElementById("newsletter-email");
      const email = emailInput.value;

      // Simulate subscription
      setTimeout(() => {
        emailInput.value = "";
        newsletterSuccess.textContent = "Thank you for subscribing!";
      }, 1000);
    });
  }
}

// Tab navigation for product pages
function setupTabNavigation() {
  const tabButtons = document.querySelectorAll(".tab-btn");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tabId = this.dataset.tab;

      // Remove active class from all tabs and content
      document.querySelectorAll(".tab-btn").forEach((btn) => {
        btn.classList.remove("active");
      });

      document.querySelectorAll(".tab-content").forEach((content) => {
        content.classList.remove("active");
      });

      // Add active class to current tab and content
      this.classList.add("active");
      document.getElementById(tabId).classList.add("active");
    });
  });
}

// Change main product image when thumbnail is clicked
function changeMainImage(thumbnail) {
  const mainImage = document.getElementById("main-product-img");
  mainImage.src = thumbnail.src;

  // Update active class
  document.querySelectorAll(".thumbnail").forEach((thumb) => {
    thumb.classList.remove("active");
  });

  thumbnail.classList.add("active");
}
// ! Do i need this?
// function changeMainImg(thumbnail) {
//   Function intentionally left incomplete
//   console.log("Wrong function called");
// }

// Other general site functions...
// Blog
// Shows / Hides Blog Form
const createBtn = document.getElementById("createBlog");
createBtn.addEventListener('click', () => {
  const blogForm = document.querySelector('.blog-create-input');
  if (!(blogForm.classList.contains('show'))) {
    blogForm.classList.add('show');
    createBtn.innerHTML = 'Collapse';
  }
  else if (blogForm.classList.contains('show')) {
    blogForm.classList.remove('show');
    createBtn.innerHTML = 'Create';
  }
});
// Upload Picutre from Selected File Input
const UploadBlogPictureBtn = document.getElementById('uploadPic');
UploadBlogPictureBtn.addEventListener('click', () => {
  const uploaded = document.getElementById('blogImgSrc');
  const blogImagePreview = document.querySelector('.blog-img-preview');
  let uploadSrc = uploaded.value;
  const img = document.createElement('img');
  img.src = uploadSrc;
  blogImagePreview.appendChild(img);
}) 
// Create Blog
// Not Fully Functional Yet
const createBlogBtn = document.getElementById('createPost');
createBlogBtn.addEventListener('click', createBlog);
function createBlog() {
  const blogList = document.querySelector('.blog-output-wrapper');
  const blogDiv = document.createElement('div');
  const blogTitle = document.getElementById('title').value;
  const blogMonth = getMonth();
  const blogDay = getDay();
  const blogDesc = document.getElementById('desc').value;
  const blogYear = getYear();
  const imgSrc = document.getElementById('logImgSrc').value;
  const blogOutline = document.getElementById('blogOutline').value;
  const blogContent = document.getElementById('blogContent').value;
  const blogAuthor = document.getElementById('blogAuth').value;
  const blogMemberSince = getDate();
  blogDiv.innerHTML =
  `
                <h3>${blogTitle}</h3>
                <div class="blog-info">
                    <span class="blog-desc">${blogDesc}</span>
                    <span class="blog-month">${blogMonth}</span>,
                    <span class="blog-day">${blogDay}</span>
                    <span class="blog-year">${blogYear}</span>
                </div>
                <div class="blog">
                  <div class="blog-input">
                    <img src="${imgSrc}" alt="" class="blog-img">
                      <p class="blog-outline">
                        ${blogOutline}
                      </p>
                      <p class="blog-content">
                        ${blogContent}
                      </p>  
                  </div>
                </div>
                <div class="blog-profile">
                <div class="blog-author-wrapper">
                    <h3>About <span class="blog-author-title">${blogAuthor}</span></h3>
                    <img src="../images/blog-author-pic2.jpg" alt="" class="blog-author-pic">
                    <p class="blog-author-desc">
                        lorem autumn totem holdem joinem destroyem allem
                    </p>   
                </div>
                <div class="blog-author-post">
                    <div class="blog-author-header">
                        <p>Popular Post</p>
                    </div>
                    <div class="blog-author-post-wrapper">
                        <a href="#"><img src="../images/blog-post-img1.jpg" alt="" class="blog-post-img"></a>
                        <a href="#"><img src="../images/blog-post-img1.jpg" alt="" class="blog-post-img"></a>
                        <a href="#"><img src="../images/blog-post-img1.jpg" alt="" class="blog-post-img"></a>
                        <a href="#"><img src="../images/blog-post-img1.jpg" alt="" class="blog-post-img"></a>
                    </div>
                </div>
                <div class="blog-support">
                    <h3>Follow Me</h3>
                    <div class="blog-socials">
                        <a href="#"><img src="../images/fb-icon.svg" alt="Facebook" class="social-img-link"></a>
                        <a href="#"><img src="../images/fb-icon.svg" alt="Facebook" class="social-img-link"></a>
                        <a href="#"><img src="../images/fb-icon.svg" alt="Facebook" class="social-img-link"></a>  
                        <a href="#"><img src="../images/fb-icon.svg" alt="Facebook" class="social-img-link"></a>  
                    </div>
                </div>
                <div class="blog-footer">
                    <h3 class="blog-member-since">
                        ${blogMemberSince}
                    </h3>
                </div>
            </div>
                
  `
  blogList.appendChild(blogList);
}
