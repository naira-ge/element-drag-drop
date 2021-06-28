import React, { Component } from 'react';
import styles from './styles.module.scss';
import Modal from '../Modal/Modal';
import ElementModal from '../ElementModal/index';

const sortElements = (a, b) => {
    if (a.order > b.order) {
        return 1
    } else {
        return -1
    }
}

class BoardClassComponent extends Component {
    state = {
        elementsList: [
            {id: 1, order: 1, name:"button", tag: "button", category:"wip", bgcolor: "white"},
            {id: 2, order: 2, name:"textarea",  tag: "textarea",  category:"wip", bgcolor: "white"},
            {id: 3, order: 3, name:"h1", tag: "h1", category:"complete", bgcolor: "white"},
            {id: 4, order: 4, name:"select", tag: "select",  category:"wip", bgcolor: "white"},
            {id: 5, order: 5, name:"p", tag: "p",  category:"wip", bgcolor: "white"},
            {id: 6, order: 6, name:"button", tag: "button", category:"wip", bgcolor: "white"},
            {id: 7, order: 7, name:"button", tag: "button", category:"wip", bgcolor: "white"},
        ],
        currentCard: null,
        showModal: false,
        edit: false,
    }

    onDropHandler = (ev, category) => {
        ev.preventDefault();
        let id = ev.dataTransfer.getData(`id`);
        console.log('Drop', id)
        this.setState({edditable:!this.state.edit})
        ev.target.style.backgroundColor = 'white'

        let elements = this.state.elementsList.filter((element) => {
            if (element.id == id) {
                element.category = category;
            }
            return element;
        });

        this.setState({
            ...this.state, 
            elements
        })
    }

    dragStartHandler = (ev, id) => {
        console.log('dragstart', id);
        ev.dataTransfer.setData(`id`, id);
        this.setState({ currentCard:id})
    }

    dragOver = (ev) => {
        ev.preventDefault();
        ev.target.style.backgroundColor = 'lightgrey'
    }

    dragLeaveHandler = (ev) => {
        ev.target.style.backgroundColor = 'white'
    }

    dragEndHandler = (ev) => {
        ev.target.style.backgroundColor = 'white'
    }

    dropHendler = (ev, element) => {
        ev.preventDefault();
        console.log('drop11', element)

        this.state.elementsList.map((elem) => {
            if (elem.id === element.id) {
               return {...elem, order: this.state.currentCard.order};
            }
            if (elem.id === this.state.currentCard.id) {
                return {...elem, order: element.order}
            }
            return elem;
        });
        
        ev.target.style.backgroundColor = 'white'
    }

    editElement = () => {
        this.setState({showModal:!this.state.showModal})
    }

    render() {
        let elements = {
            wip: [],
            complete: [],
            
        }

        this.state.elementsList.sort(sortElements).map((element) => {
            return(
                elements[element.category].push(
                    <span className = {styles.elementDetails}>
                    <span className = {styles.edditable} onClick = {this.editElement}> 📝 </span> 
                    <Modal open = {this.state.showModal} close = {this.editElement}>
                        <ElementModal element = {element} />
                    </Modal>
                    <element.tag key = {element.id}
                        draggable = {true}
                        onDragStart = {(e) => this.dragStartHandler(e, element.id)}
                        onDragLeave = {(e) => this.dragLeaveHandler(e)}
                        onDragEnd = {(e) => this.dragEndHandler(e)}
                        onDrop = {(e) => this.dropHendler(e, element)}
                        className = {styles.draggable}
                        style = {{backgroundColor: element.bgcolor}}>
                            {element.name}
                    </element.tag>
                    </span>
                )
            )
        })

        return (
            <section className = {styles.containerDrag}>
                <div className = {styles.inProgress} >
                    <h4 className = {styles.title}>
                        Choose Element 🔰
                    </h4>
                    <div className = {styles.chooseElement}
                    onDrop = {(e) => this.onDropHandler(e, 'wip')}>
                    {elements.wip}
                    </div>
                </div>
                <div className = {styles.completedBox}>
                    <h4 className = {styles.title}> 
                        Add Element ✨
                    </h4>
                <div className = {styles.dropBox}
                    onDragOver = {(e) => this.dragOver(e)}
                    onDrop = {(e) => this.onDropHandler(e, 'complete')}>
                    {elements.complete}
                </div>
                </div>
            </section>
        )
    }
}

export default BoardClassComponent
