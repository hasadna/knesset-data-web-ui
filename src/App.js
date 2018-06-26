import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import CommitteeMks from './CommitteeMks'
import CommitteeMeetings from './CommitteeMeetings'
import t from './Translations'

class AppHeader extends Component {
    render() {
        return (
            <header id="app-header" className="container">
                <div className="row">
                    <div id="logo" className="span4 clearfix">
                        <h1><a href="/"><img src={process.env.PUBLIC_URL + '/static/img/oknesset-logo.png'} alt="oknesset-logo"/><span>{t('Open Knesset')}</span></a>
                        </h1>
                    </div>
                </div>

                <ul className="nav nav-pills">
                    <li id="nav-parties"><a href="https://oknesset.org/members/index.html">{t('MKs and factions')}</a></li>
                    <li id="nav-committees"><a href="https://oknesset.org/committees/index.html">{t('Committees')}</a></li>
                    <li id="nav-attendance"><a href="https://attendance.oknesset.org/">{t('Presence')}</a></li>
                </ul>
            </header>
        )
    }
}

class AppContainer extends Component {
    render() {
        return (
            <section className="container">
                <ul className="breadcrumb">
                    <li><a className="home-icon" href="https://oknesset.org/index.html">{t('Homepage')}</a><span className="divider">/</span></li>
                    <li><a href="https://attendance.oknesset.org/">{t('Presence')}</a></li>
                </ul>
                <div id="content-main" className="main">
                    <div id="subnav">
                        <Link to="/committees">{t('Attendance at committee meetings')}</Link>
                        &nbsp;|&nbsp;
                        <Link to="/presence">{t('Presence in parliament')}</Link>
                    </div>
                    <div>
                        <Route exact path="/" component={Committees} />
                        <Route exact path="/committees" component={Committees} />
                        <Route exact path="/presence" component={Presence} />
                        <Route path="/committees/knesset_:KnessetNum/mks" component={CommitteeMks} />
                        <Route path="/committees/knesset_:KnessetNum/meetings" component={CommitteeMeetings} />
                    </div>
                </div>
            </section>
        )
    }
}

class Committees extends Component {
    render() {
        const data = [{
            'KnessetNum': 20,
            'KnessetName': 'העשרים',
            // select count(1) from (select "CommitteeSessionID" from committees_joined_meetings where "KnessetNum" = 20 and "TypeDesc" = 'פתוחה' group by "CommitteeSessionID") a
            'OpenMeetings': 8312,
            // select count(1) from (select s."CommitteeSessionID" from committees_kns_documentcommitteesession d, committees_kns_committeesession s
            // where d."GroupTypeID" = 23 and d."ApplicationDesc" = 'DOC' and s."KnessetNum" = 20 and s."TypeDesc" = 'פתוחה'
            // and s."CommitteeSessionID" = d."CommitteeSessionID" and (d."FilePath" like '%.doc' or d."FilePath" like '%.docx')
            // group by s."CommitteeSessionID" ) a
            'OpenMeetingsWithProtocol': 7040,
            // select count(1) from (select "CommitteeSessionID" from committees_joined_meetings where "KnessetNum" = 20 and "TypeDesc" = 'פתוחה'
            // and text_filename is not null and parts_filename is not null group by "CommitteeSessionID") a
            'OpenMeetingsWithParsedProtocol': 6959,
            // For Each MK: Number of meetings he attended
            //              divided by
            //              Number of meetings with parsed protocol
            //              calculate only for meetings which occured when mk had a position
            'MkAverageAttendancePercent': 1,
            // take into account only meetings for committees which the mk is a member of (at time of the meeting)
            'MkAverageAttendancePercentForCommitteeMembership': 1
        },
        {
            'KnessetNum': 19,
            'KnessetName': 'התשע-עשרה',
            // select count(1) from (select "CommitteeSessionID" from committees_joined_meetings where "KnessetNum" = 19 and "TypeDesc" = 'פתוחה' group by "CommitteeSessionID") a
            'OpenMeetings': 3923,
            // select count(1) from (select s."CommitteeSessionID" from committees_kns_documentcommitteesession d, committees_kns_committeesession s
            // where d."GroupTypeID" = 23 and d."ApplicationDesc" = 'DOC' and s."KnessetNum" = 19 and s."TypeDesc" = 'פתוחה'
            // and s."CommitteeSessionID" = d."CommitteeSessionID" and (d."FilePath" like '%.doc' or d."FilePath" like '%.docx')
            // group by s."CommitteeSessionID" ) a
            'OpenMeetingsWithProtocol': 3363,
            // select count(1) from (select "CommitteeSessionID" from committees_joined_meetings where "KnessetNum" = 19 and "TypeDesc" = 'פתוחה'
            // and text_filename is not null and parts_filename is not null group by "CommitteeSessionID") a
            'OpenMeetingsWithParsedProtocol': 3363,
            // For Each MK: Number of meetings he attended
            //              divided by
            //              Number of meetings with parsed protocol
            //              calculate only for meetings which occured when mk had a position
            'MkAverageAttendancePercent': 1,
            // take into account only meetings for committees which the mk is a member of (at time of the meeting)
            'MkAverageAttendancePercentForCommitteeMembership': 1
        }];
        const columns = [{
            Header: 'כנסת',
            accessor: 'KnessetNum',
            maxWidth: 50
        }, {
            Header: props => <span style={{wordWrap: 'normal'}}>ישיבות פתוחות</span>,
            accessor: 'OpenMeetings',
            maxWidth: 100
        }, {
            Header: 'ישיבות פתוחות שפורסם עבורם פרוטוקול',
            Cell: row => <span><Link to={'/committees/knesset_'+row.original.KnessetNum+'/meetings'}>{row.value}</Link></span>,
            accessor: 'OpenMeetingsWithProtocol',
            maxWidth: 150
        }, {
            Header: 'ישיבות פתוחות שעברו עיבוד נוכחות',
            accessor: 'OpenMeetingsWithParsedProtocol',
            Cell: row => <span><Link to={'/committees/knesset_'+row.original.KnessetNum+'/meetings'}>{row.value}</Link></span>,
            maxWidth: 150
        }, {
            Header: 'ממוצע נוכחות ח"כים בישיבות ועדה',
            accessor: 'MkAverageAttendancePercent',
            Cell: row => <span><Link to={'/committees/knesset_'+row.original.KnessetNum+'/mks'}>{row.value}%</Link></span>,
            maxWidth: 150
        }, {
            Header: 'ממוצע נוכחות ח"כים בישיבות ועדה שהם חברים בה',
            accessor: 'MkAverageAttendancePercentForCommitteeMembership',
            Cell: row => <span><Link to={'/committees/knesset_'+row.original.KnessetNum+'/mks'}>{row.value}%</Link></span>,
            maxWidth: 150
        }];
        return (
            <div>
                <h2>נוכחות בישיבות ועדה</h2>
                <ReactTable data={data} columns={columns}/>
            </div>
        )
    }
}

class Presence extends Component {
    render() {
        return (
            <div>
                Hello Presence
            </div>
        )
    }
}

class AppFooter extends Component {
    render() {
        return (
          <footer id="app-footer">
              <p><a href="javascript:$('#dataSource').toggle();">{t('Source code of the data')}</a></p>
              <div id="dataSource" style={{display:'none'}}>
                  <p>{t('Data coming from')}<a href="http://main.knesset.gov.il/Activity/Info/Pages/Databases.aspx">{t('The data interface of parliamentary information is accessible')}</a>.</p>
                  <p>{t('Data is updated daily and updated on this site and other databases and files through a project')} <a href="https://github.com/hasadna/knesset-data-pipelines">knesset-data-pipelines</a></p>
                </div>
                  <div className="container">
                      <div className="row">
                          <nav className="span8">
                              <ul className="nav nav-pills">
                                  <li><a className="home-icon" href="https://oknesset.org/index.html">{t('Homepage')}</a></li>
                                  <li><a href="https://oknesset.org/members/index.html">{t('MKs and factions')}</a></li>
                                  <li><a href="https://oknesset.org/committees/index.html">{t('Committees')}</a></li>
                                  <li><a href="https://attendance.oknesset.org/">{t('Presence')}</a></li>
                              </ul>
                          </nav>
                      </div>
                      <div className="row about">
                          <div className="span4">
                              <div className="about-oknesset">
                                  <h3>{t('The Open Knesset is a project aimed at exposing the Knessets activities to the public')}</h3>
                              </div>
                          </div>
                          <div className="span4 offset4 hasadna">
                              <h3>
                                  <img src={process.env.PUBLIC_URL + '/static/img/sadna30x30.png'} alt={t('Workshop for Public Information')} />
                                      <span>{t('Project of')}</span><a href="http://www.hasadna.org.il">{t('Workshop for Public Information')}</a>
                              </h3>
                              <ul>
                                  <li><a href="http://www.obudget.org/" target="_blank" rel="noopener noreferrer">{t('Budget develop')}</a></li>
                                  <li><a href="http://kikar.org/" target="_blank" rel="noopener noreferrer">{t('State Square')}</a></li>
                                  <li><a href="http://www.anyway.co.il/" target="_blank" rel="noopener noreferrer">ANYWAY</a></li>
                                  <li><a href="http://www.openpension.org.il/" target="_blank" rel="noopener noreferrer">{t('Open pension')}</a></li>
                              </ul>
                              <form method="post" action="https://www.paypal.com/cgi-bin/webscr">
                                  <input type="hidden" value="_s-xclick" name="cmd" />
                                      <input type="hidden" value="K7X4FWYPBR7H4" name="hosted_button_id" />
                                              <input type="submit" name="submit" value={t('Contributed to the workshop')}
                                                 className="btn  btn-big btn-large btn-primary" />
                                              <img width="1" height="1" border="0"
                                                   src="https://www.paypalobjects.com/WEBSCR-640-20110306-1/he_IL/i/scr/pixel.gif"
                                                   alt="" />
                              </form>
                          </div>
                      </div>
                      <div className="row">
                          <div className="span12"> {t('Some of the rights are reserved. Use of data from the site subject to credit')}
                          </div>
                      </div>
                  </div>
            </footer>
        )
    }
}

class App extends Component {
  render() {
      return (
          <Router>
              <div>
                  <AppHeader />
                  <AppContainer />
                  <AppFooter />
              </div>
          </Router>
      )
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Welcome to React</h1>
    //     </header>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </div>
    // );
    //   return (
    //       <Router>
    //           <div>
    //               <ul>
    //                   <li>
    //                       <Link to="/">Home</Link>
    //                   </li>
    //                   <li>
    //                       <Link to="/about">About</Link>
    //                   </li>
    //                   <li>
    //                       <Link to="/topics">Topics</Link>
    //                   </li>
    //               </ul>
    //
    //               <hr />
    //
    //               <Route exact path="/" component={Home} />
    //               <Route path="/about" component={About} />
    //               <Route path="/topics" component={Topics} />
    //           </div>
    //       </Router>
    //   )
  }
}


// const Topics = ({ match }) => (
//     <div>
//         <h2>Topics</h2>
//         <ul>
//             <li>
//                 <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/components`}>Components</Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//             </li>
//         </ul>
//
//         <Route path={`${match.url}/:topicId`} component={Topic} />
//         <Route
//             exact
//             path={match.url}
//             render={() => <h3>Please select a topic.</h3>}
//         />
//     </div>
// );

// const Topic = ({ match }) => (
//     <div>
//         <h3>{match.params.topicId}</h3>
//     </div>
// );

export default App;
