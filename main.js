class Task {}


class Prayer extends Task {

  static display_name = String('Pray for good favor');

  static perform(participants) {

    total = parseInt(0);
    participants.forEach(function() {
      total += 1;
    });
    return total;
  }

}


class Dwarf {

  static assignable_tasks = [
    'pray_to_gods'
  ];

  constructor() {
    this.name = 'dwarf';
    this.id = 'blerp';
  }
}

class Player {

  constructor() {

    // List representing all workers the player has
    let drones = [];
    let dwarf = new Dwarf();
    drones.push(dwarf);
    this.drones = drones;

    let available_tasks = [
      Prayer
    ]
    this.available_tasks = available_tasks;

  }

}


class PageController {

  static update_document() {

    console.log('Updating document');

    /*
    let parent_id = ('drones_div');
    PageController.update_element({
      element_id: parent_id
    });
    

    Game.player.drones.forEach(function(drone) {

      console.log(drone);
      console.log(`drone class name: <${drone.constructor.name}>`);
      let element_id = String(`drone_${drone.id}_p`);
      let attributes = {
        'innerHTML' : `${drone.name}`
      }

      PageController.update_element({
        element_id: element_id,
        parent_id: parent_id,
        attributes: attributes 
      });

    });
    */

    let parent_div = document.getElementById('drones_div');
    parent_div.innerHTML = ''
    Game.player.drones.forEach(function(drone) {
      let element = document.createElement('p');
      element.setAttribute('id', `drone_${drone.id}_div`);
      element.innerHTML = drone.constructor.name;
      parent_div.appendChild(element);
    });


    parent_div = document.getElementById('tasks_div')
    parent_div.innerHTML = ''
    Game.player.available_tasks.forEach(function(task) {

      
      let element_id = String(`task_${task.display_name}_p`);
      let element_span_id = String(`task_${task.display_name}_assigned_span`);
      let element_inner_html = String(`${task.display_name}: <span id='${element_span_id}'></span>`);
      let element_span_inner_html = parseInt(0);

      let element = document.createElement('p');
      element.setAttribute('id', element_id);
      element.innerHTML = element_inner_html;

      parent_div.appendChild(element);

      let span = document.getElementById(element_span_id);
      span.innerHTML = element_span_inner_html;

      //element.setAttribute('id', `task_${task.display_name}_p`);
      //element.innerHTML = task.display_name;
      //parent_div.appendChild(element);

    });
    
  }

  //static manage_element({
  //    element_id}) {

  //  element_id.innerHTML = ''

  //}

  /*
  static update_element({
      element_id, 
      attributes=null,
      parent_id=null}) {

    if (!parent_id) {
      parent = document.body;
    }
    else {
      if ($(`#${parent_id}`).length === 0) {
        PageController.update_element({
          element_id: parent_id
        });
      }
      parent = document.getElementById(parent_id);
    }

    var element = document.getElementById(element_id);
    //if (!parent_id.contains(element_id)) {
    if (!parent.contains(element)) {
      // Create the element
      element = document.createElement(element_id);
      element.setAttribute('id', element_id);
    }
    //else {
    //  var element = document.getElementById(element_id);
    //}

    console.log('About to set attributes');
    console.log(attributes);
    if (attributes) {
      for (const [key, value] of Object.entries(attributes)) {
        if (key == 'innerHTML') {
          element.innerHTML = value;
        }
        else {
          element.setAttribute(key, value);
        }
      }
    }

    console.log(document.body);
    console.log(parent);
    parent.appendChild(element);
  }
  */

  //static ensure_element_exists({element_id, parent_id=null, attributes=null}

  /*
  static update_element({element_id, parent_id=null, attributes=null}) {

    if (!parent_id) {
      parent_id = document.body;
    }

    //if ($(`#${element_id}`).length === 0) {
    if (!parent_id.contains(element_id)) {
      Game.create_element({
        element_id: element_id,
        parent_id: parent_id,
        attributes: attributes
      })
    }
    else {

    }
  }
  */

  /*
  static create_element({element_id, parent_id=null, attributes=null}) {

    if (!parent_id) {
      parent_id = document.body;
    }

    let element = document.createElement(element_id);
    element.setAttribute('id', element_id);

    parent.appendChild(element);

  }
  */

}


class Game {

  static page_controller = PageController;

}


// Game logic
window.onload = function() {
  Game.player = new Player();
  Game.page_controller.update_document();
}