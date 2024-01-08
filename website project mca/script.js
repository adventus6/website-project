// JavaScript for interacting with the webpage

// Show/hide sections based on navigation links
/*
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const sectionId = e.target.getAttribute('href').substring(1);
    document.querySelectorAll('section').forEach(section => {
      if (section.id === sectionId) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  });
});
*/

// Simulated functionality (without backend)
// Handling form submission for homework upload (simulated)
document.getElementById('homeworkForm').addEventListener('submit', e => {
  e.preventDefault();
  const file = document.getElementById('homeworkFile').files[0];
  // Simulated file upload functionality
  console.log('File uploaded:', file.name);
});

// Simulated liking functionality
document.querySelectorAll('.like-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Simulated like action
    console.log('Liked!');
  });
});

// Simulated commenting functionality
document.querySelectorAll('.comment-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Simulated comment action
    const commentBox = document.createElement('div');
    commentBox.classList.add('comment');
    commentBox.innerHTML = '<p>Sample comment</p>'; // Replace with actual user input
    btn.parentNode.parentNode.querySelector('.comments').appendChild(commentBox);
  });
});
