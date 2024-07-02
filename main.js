import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import * as OV from 'online-3d-viewer';

window.addEventListener ('load', () => {
  // set the location of the external libraries
  OV.SetExternalLibLocation ('../libs');

  // get the parent element of the viewer
  let parentDiv = document.getElementById ('app');

  // initialize the viewer with the parent element and some parameters
  let viewer = new OV.EmbeddedViewer (parentDiv, {
      backgroundColor : new OV.RGBAColor (255, 255, 255, 255),
      defaultColor : new OV.RGBColor (200, 200, 200),
      edgeSettings : new OV.EdgeSettings (false, new OV.RGBColor (0, 0, 0), 1),
      environmentSettings : new OV.EnvironmentSettings (
          [
              'assets/envmaps/fishermans_bastion/posx.jpg',
              'assets/envmaps/fishermans_bastion/negx.jpg',
              'assets/envmaps/fishermans_bastion/posy.jpg',
              'assets/envmaps/fishermans_bastion/negy.jpg',
              'assets/envmaps/fishermans_bastion/posz.jpg',
              'assets/envmaps/fishermans_bastion/negz.jpg'
          ],
          false
      ),
      onModelLoaded(){
        console.log(viewer.model.meshes)
      }
  });

  // load a model providing model urls
  viewer.LoadModelFromUrlList ([
      '/models/water_desalinator.obj',
      // '/models/mesh2.stl',
  ]);
  
});