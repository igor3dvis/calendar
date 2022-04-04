import React, { Component } from "react";
import Button from "./components/Button";
import Modal from "./components/Modal";
import Input from "./components/Input"
import Select from "./components/Select"
import Card from "./components/Card"
import Calendar from "./components/calendar/Calenadr";
import "./App.css";

class App extends Component {
  state = {
    btnFirst: "Open First modal",
    btnSecond: "Open Second modal",
    btnSubmit: "Создать карточку",
    modals: { stat: false, desc: "Это ... модальное окно" },
    allData: [],
    plcHoldName: "введите имя",
    plcHoldService: "введите услугу",
    valueService: "",
    valueName: ""
  };

  user = {
    name: '',
    service: '',
    dateTime: null
  }

  openFirstWin = () => {
    this.setState(() => ({
      modals: { desc: "Это первое модальное окно", stat: true }
    }))
  }

  openSecondWin = () => {
    this.setState(() => ({
      modals: { desc: "Это второе модальное окно", stat: true }
    }))
  }

  pressCancel = () => {
    this.setState(() => ({ modals: { stat: false } }))
  };

  setValueName = (event) => {
    this.setState(() => ({ valueName: event.target.value }))
  }

  setValueService = (event) => {
    this.setState(() => ({ valueService: event.target.value }))
  }

  submitData = async () => {
    this.user.name = this.state.valueName;
    this.user.service = this.state.valueService;
    const d = new Date()
    this.user.dateTime = d.toLocaleString()
    console.log(this.user);
    await fetch("http://localhost:3001/user", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(this.user)
    })

    this.setState(() => ({ valueName: "", valueService: "Выберите услугу" }))

    this.getData()
  };

  getData = () => {
    fetch("http://localhost:3001/user")
      .then(data => { return data.json() })
      .then(data => {
        this.setState(() => ({ allData: data }))
      })
  };

  delelteCard = async (event) => {
    const id = event.target.id
    await fetch(`http://localhost:3001/user/${id}`, {
      method: 'DELETE'
    })
      .then(data => { console.log(data); })
    this.getData()
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <Button clickHandler={this.openFirstWin} caption={this.state.btnFirst} />
          <Button clickHandler={this.openSecondWin} caption={this.state.btnSecond} />
        </div>
        {this.state.modals.stat ?
          <Modal status={this.state.modals} onCancel={this.pressCancel} onOk={this.pressOk} />
          : null}
        <div className="input-wrap">
          <div>
            <Input changeHandler={this.setValueName}
              valueText={this.state.valueName}
              placeHold={this.state.plcHoldName}
            />
            <Select changeHandler={this.setValueService}
              valueText={this.state.valueService}
            />
          </div>
          <Button clickHandler={this.submitData} caption={this.state.btnSubmit} />
        </div>
        <Calendar />
        <div className="card-wrapper">
          {this.state.allData.map((el) => (
            <Card key={el.id}
              dataId={el.id}
              name={el.name}
              service={el.service}
              dateTime={el.dateTime}
              clickDelete={this.delelteCard}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;