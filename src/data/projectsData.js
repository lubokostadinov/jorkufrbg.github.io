import opengl from '../assets/svg/projects/opengl.svg';
import descent from '../assets/svg/projects/descent.svg';
import gameEngine from '../assets/svg/projects/game-engine.svg';
import rayTrace from '../assets/svg/projects/raytrace.svg';
import empires from '../assets/svg/projects/empires.svg';
import rouglike from '../assets/svg/projects/rougelike.svg';
import snack from '../assets/svg/projects/snack.svg';

// import whisp from '../assets/svg/projects/whisp.svg';
// import motoretta from '../assets/svg/projects/motoretta.svg';
// import aakasha from '../assets/svg/projects/aakasha.svg';
// import artGallery from '../assets/svg/projects/artGallery.svg';
// import hearteum from '../assets/svg/projects/hearteum.svg';
// import plygear from '../assets/svg/projects/plygear.svg';
// import michael from '../assets/svg/projects/michael.svg';

export const projectsData = [
  {
    id: 1,
    projectName: 'Descent Raytraced',
    projectDesc:
      'During my third year in university I worked on Descent Raytraced. The purpose of the project was to rewrite the graphics of the old game Descent to be using ray tracing. For this project we used DirectX, Raytracing API. I worked on creating the DirectX renderer, implemnting the path tracing algorithm and the physically based rendering.',
    tags: ['DirectX Raytracing API', '3 year project'],
    code: 'https://github.com/BredaUniversityGames/DXX-Raytracer',
    demo: 'https://youtu.be/wCGnQoakOWc',
    image: descent,
  },
  {
    id: 2,
    projectName: '3D OpenGl',
    projectDesc:
      'This project showcases various features in computer graphics, including model loading in OBJ format, materials with textures, instanced rendering, point lights and post-proccessing shaders. I created this program using my knowledge and experiance with C++ and OpenGL during my first academic year.',
    tags: ['C++', 'OpenGL'],
    code: 'https://github.com/lubokostadinov/3DopenGL.git',
    demo: 'https://youtu.be/DDv-jmcb5X4',
    image: opengl,
  },

  {
    id: 3,
    projectName: 'Game Engine',
    projectDesc:
      'I worked on this project in a group of 4 people, the engine is developed in C++, DirectX 12 for windows graphics and GNMX for PlayStation 4 graphics. The engine provides demo game which runs both on windows and PlayStation 4. For this project I worked on the graphics implementation on windows using DirectX 12. The renderer contains model loading, texture management, directional lights and post-processing pipeline.',
    tags: ['C++', 'DirectX 12', 'PlayStation 4'],
    code: '',
    demo: 'https://www.youtube.com/watch?v=mJh2_gTsIok&feature=youtu.be',
    image: gameEngine,
  },
  {
    id: 4,
    projectName: 'Simple Ray Tracer',
    projectDesc:
      'This project is a C++ program that generates a ray traced image with a plane and spheres using diffuse shading and reflection. It uses my own math library and SFML to output the final image. I implemented unit tests for vector operations to ensure accuracy and efficiency.',
    tags: ['C++'],
    code: 'https://github.com/lubokostadinov/RayTracer-Project',
    demo: '',
    image: rayTrace,
  },
  {
    id: 5,
    projectName: 'Empires',
    projectDesc:
      'Strategy game on raspberry pi 4 built with C++ and openGL es 3. The game generates a galaxy and gives each player a home planet. The goal of the game is to gather resources, craft space ships and conquer the enemy planets. The game contains GUI made with ImGui, 3D models (OBJ format), Instanced rendering and post-processing effects.',
    tags: ['C++', 'OpenGL', 'ImGui'],
    code: '',
    demo: 'https://youtu.be/T96Bzpo98Is',
    image: empires,
  },
  {
    id: 6,
    projectName: 'Rougelike Game',
    projectDesc:
      'In the second year during my studies I worked on a game with a group with other programmers, artists and designers to create a game, using custom game engine built in C++ and DirectX 12. The game runs both on Windows and PlayStation 4. For this project I worked mostly on implementing the UI elements functionality and a UI editor for the designers to create the menus.',
    tags: ['C++', 'DirectX 12', 'PlayStation 4'],
    code: '',
    demo: 'https://youtu.be/xErvTAX_Lc8',
    image: rouglike,
  },
  {
    id: 7,
    projectName: 'Snackbar Showdown',
    projectDesc:
      'During my first year at university we had to work in a group project and  release a game, using Unreal Engine. For this game I worked on the Player movement mechanics, his health system, the collectible items and the inventory system.',
    tags: [
      'Unreal Engine',
      'Player Movement Mechanics',
      'Health System',
      'Collectibles',
      'Inventory',
    ],
    code: '',
    demo: 'https://buas.itch.io/snackbarshowdown',
    image: snack,
  },
];

/*
    Do not remove any fields.
    Leave it blank instead as shown below
*/
/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
