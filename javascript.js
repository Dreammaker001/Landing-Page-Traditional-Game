const App = {
    data() {
        return {
            line : false,
            carouselImg:[
                'assets/rockpaperstrategy-1600.jpg',
                'assets/bg-image2.jpg',
                'assets/rockpaperstrategy-1600.jpg'
            ],
            features:[
                {
                    id: 'collapseExample',
                    judul : 'TRADITIONAL GAMES',
                    isi: 'If you miss your childhood, we provide many traditional games here',
                    active : true
                },
                {
                    id: 'collapseExample2',
                    judul : 'GAME SUIT',
                    isi: 'If you miss your childhood,',
                    active : false
                },
                {
                    id: 'collapseExample3',
                    judul : 'TBD',
                    isi: 'we provide many traditional games here',
                    active : false
                }
            ],
            card:[
                {
                    name: 'Evan Lahti',
                    img: 'assets/Evan.png',
                    work: 'PC Gamer',
                    twitter: '',
                    message: '“One of my gaming highlights of the year.”',
                    date: 'June 18, 2021'
                },
                {
                    name: 'Jada Griffin',
                    img: 'assets/Jada.png',
                    work: 'Nerdreactor',
                    twitter: '',
                    message: '“The next big thing in the world of streaming and survival games.”',
                    date: 'July 10, 2021'
                },
                {
                    name: 'Aaron Williams',
                    img: 'assets/Aaron.png',
                    work: 'Uproxx',
                    twitter: '',
                    message: '“Snoop Dogg Playing The Wildly Entertaining ‘SOS’ Is Ridiculous.”',
                    date: 'December 24, 2018'
                }
            ],
            navFooter:[
                {
                    name: 'MAIN',
                    link: ''
                },
                {
                    name: 'ABOUT',
                    link: ''
                },
                {
                    name: 'GAME FEATURES',
                    link: ''
                },
                {
                    name: 'SYSTEM REQUIREMENTS',
                    link: ''
                },
                {
                    name: 'QUOTES',
                    link: ''
                }
            ],
            sosmed:[
                {
                    icon:'<i class="fab fa-facebook-f"></i>',
                    link: ''
                },
                {
                    icon :'<i class="fab fa-twitter"></i>',
                    link: ''
                },
                {
                    icon: '<i class="fab fa-youtube"></i>',
                    link: ''
                },
                {
                    icon:'<i class="fab fa-twitch"></i>',
                    link: ''
                }
            ],
            footerPolicy:[
                {
                    name: 'PRIVACY POLICY',
                    link : ''
                },
                {
                    name: 'TERMS OF SERVICES',
                    link: ''
                },
                {
                    name: 'CODE OF CONDUCT',
                    link: ''
                }
            ]
        }
    },
    methods:{
        whiteCircle(index){
            if(index != 0 && this.features[index].active == true){
                this.features[index].active = false
            }
            else{
                this.features[index].active = true
            }
        }
    }
}

Vue.createApp(App).mount('#app')

function resizeVr(){
    var width = window.innerWidth;
    console.log(width)
    if(width <= 1787 && width>=1472){
        document.getElementById("vr").style.height = "6.8em";
    }
    else if(width <= 1471 && width>=1406){
        document.getElementById("vr").style.height = "8.2em";
    }
    else if(width <= 1407 && width>=1200){
        document.getElementById("vr").style.height = "8em";
    }
    else if(width <= 1199 && width>=991){
        document.getElementById("vr").style.height = "8.5em";
    }else if(width <= 983 && width>=753){
        document.getElementById("vr").style.height = "6.8em";
    }
    else if(width <= 752 && width>=576){
        document.getElementById("vr").style.height = "8.2em";
    }
    // else if(width <= 600 && width>=423){
    //     document.getElementById("vr").style.height = "8.2em";
    // }
    else if(width <= 575 && width>=420){
        document.getElementById("vr").style.height = "7.4em";
    }
    else if(width <= 421 && width>=329){
        document.getElementById("vr").style.height = "9em";
    }
    else if(width <= 328){
        document.getElementById("vr").style.height = "10.4em";
    }
    else{
        document.getElementById("vr").style.height = "7em";
    }
}

document.onreadystatechange =resizeVr()

window.addEventListener('resize', resizeVr)