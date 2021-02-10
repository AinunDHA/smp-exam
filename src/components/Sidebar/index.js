import React from "react"
import Sidebar from "react-sidebar"
import "./Sidebar.css"
 
class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 
  render() {
    return (
      <Sidebar
        sidebar={<b>
          <ul style = {
            {
              float: "left",
              display: "block",
              listStyleType: "none",
              padding: 0,
              margin: 0,
              fontSize: "17px",
              textDecorationColor: "Dark Turquoise",
              textAlign: "center",
               backgroundColor: "#ADD8E6"
                 }
               }>
     
            <li>
                 <button className="tombol-soal">
                    <span id="no-soal">
                         Nomor 1
                    </span>
                 </button>

            </li>
              <li>
               <button className="tombol-soal">
                    <span id="no-soal">
                         Nomor 2
                    </span>
                 </button>
            </li>
            <li>
              <button className="tombol-soal">
                    <span id="no-soal">
                         Nomor 3
                    </span>
                 </button>
            </li>
            <li>
              <button className="tombol-soal">
                    <span id="no-soal">
                         Nomor 4
                    </span>
                 </button>
            </li>
            <li>
               <button className="tombol-soal">
                    <span id="no-soal">
                         Nomor 5
                    </span>
                 </button>
            </li>
            <li>
              <button className="tombol-soal">
                    <span id="no-soal">
                         Nomor 6
                    </span>
                 </button>
            </li>
            <li>
              <button className="tombol-soal">
                    <span id="no-soal">
                         Nomor 7
                    </span>
                 </button>
            </li>
            <li>
              <button className="tombol-soal">
                    <span id="no-soal">
                         Nomor 8
                    </span>
                 </button>
            </li>
            <li>
              <button className="tombol-soal">
                    <span id="no-soal">
                         Nomor 9
                    </span>
                 </button>
            </li>
            <li>
              <button className="tombol-soal">
                    <span id="no-soal">
                         Nomor 10
                    </span>
                 </button>
            </li>
            <li>
              <button className="tombol-soal">
                    <span id="no-soal">
                         Nomor 11
                    </span>
                 </button>
            </li>
              <li>
              <button className="tombol-soal">
                    <span id="no-soal">
                         Nomor 12
                    </span>
                 </button>
            </li>
            <li>
              <button className="tombol-soal">
                    <span id="no-soal">
                         Nomor 13
                    </span>
                 </button>
            </li>
            <li>
              <button className="tombol-soal">
                    <span id="no-soal">
                         Nomor 14
                    </span>
                 </button>
            </li>
            <li>
              <button className="tombol-soal">
                    <span id="no-soal">
                         Nomor 15
                    </span>
                 </button>
            </li>
            <li>
              <button className="tombol-soal">
                    <span id="no-soal">
                         Nomor 16
                    </span>
                 </button>
            </li>
            <li>
              <button className="tombol-soal">
                    <span id="no-soal">
                         Nomor 17
                    </span>
                 </button>
            </li>
            <li>
              <button className="tombol-soal">
                    <span id="no-soal">
                         Nomor 18
                    </span>
                 </button>
            </li>
            <li>
              <button className="tombol-soal">
                    <span id="no-soal">
                         Nomor 19
                    </span>
                 </button>
            </li>
            <li>
              <button className="tombol-soal">
                    <span id="no-soal">
                         Nomor 20
                    </span>
                 </button>
            </li>
           
          </ul>
        </b>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
      >
      <span className="side-number" onClick={() => this.onSetSidebarOpen(true)}>
        {/* <a>&times; open */}
        <a>
            <svg width="30" height="30">
                <path d="M0,5 30,5" stroke="#000" strokeWidth="5" />
                <path d="M0,14 30,14" stroke="#000" strokeWidth="5" />
                <path d="M0,23 30,23" stroke="#000" strokeWidth="5" />
            </svg>
        </a>

      </span>
        {/* <button onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button> */}
      </Sidebar>
    );
  }
}
 
export default Drawer












