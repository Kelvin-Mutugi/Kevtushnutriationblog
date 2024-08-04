    const postContainer = document.getElementById('post-container');
    const searchBar = document.getElementById('search-bar');

    // Sample blog post data
    const posts = [
        {
            title: '10 Healthy Eating Tips',
            image: 'images/healthy-eating.jpg',
            content: 'healthy-eating-tips.html',
            keywords: 'health, eating, tips, nutrition',
            paragraph:'Eating healthy is more than just a trend; its a lifestyle choice that can improve your overall well-being. Whether youre looking to lose weight, boost your energy levels, or simply feel better, these ten healthy eating tips will guide you towards better nutrition and a healthier you...'
        },
        {
            title: 'Benefits of a Plant-Based Diet',
            image: 'images/plant-based-diet.jpg',
            content: 'benefits-of-plant-based-diet.html',
            keywords: 'plant-based, diet, health, benefits',
            paragraph:'Plant-based diets are often lower in calories and higher in fiber, which can help with weight loss and maintenance. The high fiber content keeps you feeling full longer, reducing the likelihood of overeating...'
        },
        {
            title: 'How to create balanced diet meal plan',
            image: 'images/balanced-meal-plan.jpg',
            content: 'balanced-meal-plan.html',
            keywords: ' balanced diet, health, benefits',
            paragraph:'A balanced meal plan is essential for maintaining good health and achieving your nutritional goals. It involves incorporating a variety of foods to ensure you get all the necessary nutrients your body needs. Here’s a guide to creating a balanced meal plan that works for you...'
        },
        {
            title: 'Understanding micronutrients',
            image: 'images/Understanding-Macronutrients.jpg',
            content: 'macronutrients.html',
            keywords: 'health, benefits, micronutrients',
            paragraph:'Macronutrients are the nutrients that provide us with energy and are essential for growth and maintenance. They are categorized into three main types: protein, carbohydrates, and fats. Understanding these ...'
        },
        {
          title: 'top 5 best nutritional superfoods',
          image: 'images/Super-foods.jpg',
          content: 'top-5-superfoods.html',
          keywords: 'health, benefits, super-foods',
          paragraph:'Superfoods are nutrient-rich foods that offer numerous health benefits. Including them in your diet can help you meet your nutritional needs and enhance your overall well-being. Here are five superfoods that you should consider adding to your meals...'
        },
        {
          title: 'Ultimate Guide to Calories',
          image: 'images/ai-generated-cake.png',
          content: 'calories-guide.html',
          keywords: 'calories, calorie intake, healthy lifestyle, nutrition, diet, weight management',
          paragraph:'This post will cover everything you need to know about calories, including what they are, how to calculate your daily needs, and tips for managing your calorie intake to maintain a healthy lifestyle...'
        },
        {
          title: 'Healthy Dinner Ideas',
          image: 'images/fried-rice.jpg',
          content: 'healthy-dinner-ideas.html',
          keywords: 'healthy dinner ideas, trending recipes, nutritious meals, healthy dinner recipes',
          paragraph:'Whether you’re looking to try something new or need inspiration for your next meal, we have gathered a variety of nutritious and delicious options to help you maintain a balanced diet...'
        },
        {
          title: 'Healthy Diet Guide',
          image: 'images/pan-1832926_1920.jpg',
          content: 'healthy-diet.html',
          keywords: 'healthy diet, nutrition, wellness, balanced diet, healthy recipes, diet tips, nutrition advice',
          paragraph:'This post will cover all the essential information, tips, and recipes to help you achieve a balanced and nutritious lifestyle...'
        },
        {
          title: 'Understanding Obesity and Healthy Meals to Prevent It',
          image: 'images/vegetables.jpg',
          content: 'obesity-and-healthy-meals.html',
          keywords: 'obesity, healthy meals, recipes, weight management, nutrition, health',
          paragraph:'Obesity is a growing global health concern with significant implications for overall health and well-being. Understanding its causes and how to combat it with healthy meals is crucial for a healthier lifestyle. In this post, we will explore the impact of obesity, present healthy meal ideas, and provide recipes to help reduce and prevent obesity... '
        },
        {
          title: 'Famous and Trending Foods: Nutritional Values and Effects',
          image: 'images/smoothie.jpg',
          content: 'trending-foods.html',
          keywords: 'trending foods, nutrition, calorie count, health, wellness, diet',
          paragraph:'In the ever-evolving world of health and nutrition, staying informed about the latest food trends and their nutritional values is crucial. This post provides a comprehensive guide to some of the most famous and trending foods, detailing their calorie content, nutritional benefits, and potential effects on your body... '
        },
      
        {
          title: 'The Benefits of Mindful Eating and How to Practice It',
          image: 'images/meal-plan.jpg',
          content: 'benefits-of-mindfull-eating.html',
          keywords: 'mindful eating, healthy eating habits, digestion, weight management, stress reduction ',
          paragraph:'Mindful eating is a practice that involves paying full attention to the experience of eating and drinking, and it can lead to improved health and well-being. By being more aware of what you eat and how you eat, you can develop a healthier relationship with food and make more conscious choices. This guide explores the benefits of mindful eating and provides practical tips on how to incorporate it into your daily life...'
        }, 
        {
          title: 'Debunking Common Nutrition Myths',
          image: 'images/french-fries.jpg',
          content: 'debunking-common-nutriation-myths.html',
          keywords: 'nutrition myths, healthy eating, debunking nutrition myths, dietary misconceptions, evidence-based nutrition ',
          paragraph:'Nutrition is a field rife with misconceptions and myths, which can lead to confusion about healthy eating practices. Understanding and debunking these myths can help you make informed dietary choices and foster better health. In this post, we will address some of the most common nutrition myths and provide evidence-based explanations.<br> <br> <b> 1. Myth:  Carbs Make You Gain Weight Reality:</b> <br> <br>  Carbohydrates...'
        }, 
        {
          title: 'How to Incorporate More Vegetables into Your Diet',
          image: 'images/vegetables.jpg',
          content: 'How-to-Incorporate-More-Vegetables-into-Your-Diet.html',
          keywords: 'vegetables, healthy diet, nutrition, recipes, meal planning ',
          paragraph:'Vegetables are rich in essential nutrients, including vitamins, minerals, and fiber, which contribute to various bodily functions. They can aid in weight management, improve digestion, and reduce the risk of chronic diseases. However, many people struggle to add sufficient vegetables to their daily meals. This guide will provide practical strategies to help you increase your vegetable intake. <br> <br><b> 1. Start with Breakfast </b> <br> <br> Breakfast is often the...'
        }, 
        {
          title: 'How to Stay Hydrated: The Importance of Water in Your Diet',
          image: 'images/little-girl.jpg',
          content: 'how-to-stay-hydrated.html',
          keywords: 'hydration, staying hydrated, water intake, health tips, hydration needs',
          paragraph:'Proper hydration is essential for maintaining energy levels, cognitive function, and physical performance. This guide provides practical tips on staying hydrated and understanding the importance of water in your diet. <br> <br> <b> 1. Understand Your Hydration Needs <br> <br>. Daily Water Intake: </b> The recommended daily... '
        }, 
        {
          title: 'Top 10 Immune-Boosting Foods to Enhance Your Health',
          image: 'images/blueberry.jpg',
          content: 'immune-boosting-foods.html',
          keywords: 'immune-boosting foods, nutrition, vitamin C, antioxidants, healthy diet ',
          paragraph:'<b> 1. Citrus Fruits </b> <br><br> <b> Examples: </b> Oranges, grapefruits, lemons, limes <br> <br> <b> Benefits:</b> Rich in vitamin C, which is known to enhance the production of white blood cells and boost immune function. Vitamin C also acts as an antioxidant, protecting cells from damage...'
        }, 
        {
          title: 'Nutrition Tips for Managing Stress and Anxiety',
          image: 'images/mug.jpg',
          content: 'nutritional-tips-for-managing-stress-and-anxiety.html',
          keywords: 'immune-boosting foods, nutrition, vitamin C, antioxidants, healthy diet ',
          paragraph:'Stress and anxiety can impact overall health and well-being, including dietary habits and nutritional status. Proper nutrition plays a key role in managing stress and supporting mental health. This guide provides practical nutrition tips for managing stress and anxiety effectively. <br> <br><b> 1. Focus on Balanced Meals </b> <br><br><b>Components: </b> Include a balance of protein,  '
        }, 
        {
          title: 'Pre- and Post-Workout Nutrition: What to Eat and When',
          image: 'images/table-setting.jpg',
          content: 'pre-and-post-workout-nutriation.html',
          keywords: 'pre-workout nutrition, post-workout nutrition, workout meal ideas, fitness nutrition, exercise recovery ',
          paragraph:'Proper nutrition before and after a workout can significantly impact your performance, recovery, and overall fitness goals. Consuming the right nutrients at the right times helps fuel your exercise, repair muscles, and replenish energy stores. This guide provides practical advice on what to eat before and after your workouts to optimize results... '
        }, 
        {
          title: 'The Role of Fiber in a Healthy Diet and How to Get More of It',
          image: 'images/whole-grains.jpg',
          content: 'the-role-of-fiber-in-a-diet.html',
          keywords: 'fiber, healthy diet, nutrition, digestive health, weight management',
          paragraph:'Fiber is a crucial component of a healthy diet, offering a range of benefits that contribute to overall wellness. Found in plant-based foods, fiber aids in digestion, supports weight management, and reduces the risk of certain diseases. Understanding the different types of fiber and how to incorporate more into your diet can help you optimize your health... '
        }, 
        {
          title: 'Tips for Eating Healthy on a Budget',
          image: 'images/beans.jpg',
          content: 'tips-for-eating-healthy-on-a-budget.html',
          keywords: 'eating healthy on a budget, budget-friendly meals, meal planning, affordable nutrition, healthy eating tips',
          paragraph:'Eating healthy doesn’t have to be expensive. With some planning and strategic shopping, you can enjoy nutritious meals while sticking to a budget. This guide provides practical tips for maintaining a healthy diet without overspending... '
        }, 
        /*
        {
          title: ' ',
          image: 'images/ .jpg',
          content: ' .html',
          keywords: ' ',
          paragraph:' '
        }, */
      
        // Add more posts here...
    ];

    // Function to display posts
    const displayPosts = (postsToDisplay) => {
        postContainer.innerHTML = '';
        postsToDisplay.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <img src="${post.image}" alt="${post.title}">
                <p>${post.paragraph}
                <a href="${post.content}">Read More</a> </p>
            `;
            postContainer.appendChild(postElement);
        });
    };
    
    // Initial display of all posts
    displayPosts(posts);

    // Search functionality
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredPosts = posts.filter(post =>
            post.title.toLowerCase().includes(searchTerm) ||
            post.keywords.toLowerCase().includes(searchTerm)
        );
        displayPosts(filteredPosts);
    });
    
    
    
   const cookiePopup = document.getElementById('cookiePopup');
    const acceptBtn = document.getElementById('acceptBtn');
    const declineBtn = document.getElementById('declineBtn');

    // Check if the user has already made a choice
    if (!localStorage.getItem('cookieConsent')) {
        cookiePopup.classList.add('show');
    }

    acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'accepted');
        cookiePopup.classList.remove('show');
    });

    declineBtn.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'declined');
        cookiePopup.classList.remove('show');
        // You may want to disable ads or cookies here if necessary
    });

     