document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    
    hamburger.addEventListener("click", function() {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
    });
});




   
// JS: Counter Animation 

    let count = 0;
    const target =24;
    const speed = 20;
    const counter = document.getElementById('counter');
  
    function updateCounter() {
      if (count < target) {
        count += Math.ceil((target - count) / 10);
        counter.innerText = count;
        setTimeout(updateCounter, speed);
      } else {
        counter.innerText = target;
      }
    }
  
    window.addEventListener('DOMContentLoaded', updateCounter);
 
  
   //JS: Animate Text On Scroll 
  
    
  

//this part is experience page time line js code 


    const items = document.querySelectorAll('.content');
    const revealOnScroll = () => {
      const trigger = window.innerHeight * 0.85;
      items.forEach(item => {
        const top = item.getBoundingClientRect().top;
        if (top < trigger) {
          item.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);



     // Animate progress bars when they come into view
     document.addEventListener("DOMContentLoaded", () => {
      const skills = document.querySelectorAll(".skill");

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const skill = entry.target;
            skill.classList.add("visible");

            const progress = skill.querySelector(".progress");
            const percent = progress.getAttribute("data-percent");

            const fill = document.createElement("div");
            fill.classList.add("progress-fill");
            progress.appendChild(fill);

            setTimeout(() => {
              fill.style.width = percent;
            }, 200);

            observer.unobserve(skill);
          }
        });
      }, { threshold: 0.3 });

      skills.forEach(skill => observer.observe(skill));
    });




      // Scroll animation using Intersection Observer
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
  
      document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
      });








      const modal = document.getElementById("modal");
      const modalContent = document.getElementById("modalContent");
  
      const projectData = {
        1: {
          description: "This project is a modern, responsive personal website built for a licensed psychology consultant offering mental health services, therapy sessions, and self-help resources.",
          images: ["images/photo_2025-04-12_07-51-43.jpg", 
          "images/photo_2025-04-12_03-54-04.jpg", 
          "images/photo_2025-04-12_07-51-31.jpg", 
          "images/photo_2025-04-12_04-21-04.jpg"],
          links: [{ text: "Visit Project &#10162;", href: "https://fitretcounseling.com/" }]
        },
        2: {
          description: "This is a fully responsive Forex trading website designed and built by me to demonstrate real-world skills in web development and user interface design.",
          images: ["images/photo_2025-04-12_09-09-52.jpg", 
          "images/photo_2025-04-12_09-10-02.jpg", 
          "images/photo_2025-04-12_09-10-07.jpg"],
          links: [{ text: "Visit Project &#10162;", href: "https://dagimtrading.com/" }]
        },
        3: {
          description: "This project is a modern, responsive website for Gutema Firisa Construction, a well-established Ethiopian company specializing in building, road, and water work projects.",
          images: ["images/gutema 1.jpg", 
          "images/gutema 2.jpg", 
          "images/gutema 3.jpg"],
          links: [{ text: "Visit Project &#10162;", href: "https://gutemafirisa.com/" }]
        }
      };
  
      function openModal(id) {
        const project = projectData[id];
        let content = `
          <button class="close-btn" onclick="closeModal()"><small>&#10008;</small></button>
          <div class="expanded-image">
            <img src="${project.images[0]}" id="mainImage" alt="Expanded Image">
          </div>
          <div class="modal-gallery">
            ${project.images.map(img => `<img src="${img}" onclick="setMainImage('${img}')">`).join('')}
          </div>
          <div class="expanded-description">${project.description}</div>
          <div class="bottom-links">
            ${project.links.map(link => `<a href="${link.href}" target="_blank">${link.text}</a>`).join('')}
          </div>
        `;
        modalContent.innerHTML = content;
        modal.style.display = "flex";
      }
  
      function setMainImage(src) {
        document.getElementById("mainImage").src = src;
      }
  
      function closeModal() {
        modal.style.display = "none";
      }









      function revealCardsOnScroll() {
        const cards = document.querySelectorAll('.service-card');
        const triggerPoint = window.innerHeight * 0.85;
    
        cards.forEach(card => {
          const top = card.getBoundingClientRect().top;
          if (top < triggerPoint) {
            card.classList.add('visible');
          }
        });
      }
    
      window.addEventListener('scroll', revealCardsOnScroll);
      window.addEventListener('load', revealCardsOnScroll);







      // Reveal cards on scroll
  function revealTestimonials() {
    const cards = document.querySelectorAll('.testimonial-card');
    const windowHeight = window.innerHeight * 0.85;

    cards.forEach(card => {
      const top = card.getBoundingClientRect().top;
      if (top < windowHeight) {
        card.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealTestimonials);
  window.addEventListener('load', revealTestimonials);

    
    