import svm from './images/SVMdigit.png';
import weather from './images/Weather.jpg';
export default
    {
        
        name :'Bhaskar.',
        headerTagline: [
                        'Web Developer, Competitive programmer',
                        
                        "Machine Learning Enthusiast",
                        
                        'I love exploring new things!',
                        
    ],
        //Contact Email
        contactEmail:'maitybhaskar2015@gmail.com',
        // About Text 
        abouttext: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        aboutImage:'https://images.unsplash.com/photo-1521587765099-8835e7201186?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
       
       ShowAboutImage:true,//true or false 
       //  Projects 
       projects:[
           {
            id: 1,
            title:'SVM Digit Recognition', 
            service:'Machine Learning Algorithm', 
            
            imageSrc: svm,
            
            url:'https://github.com/Bhaskar-maity/SVM-Digit-recognition'
            },
            {
                id: 2,
                title: 'Weather App',
                service: 'Website Development',
                imageSrc: weather,
                url: 'https://bhaskar-maity.github.io/Javascript-weather-app/'
            },


                   
        ],
        social: [
            
           
        ]
    }