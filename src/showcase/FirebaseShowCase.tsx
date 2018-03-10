import * as React from 'react';
import { Firebase } from '../components/firebase';
import { Record } from '../models';

export interface FirebaseShowCaseProps {

}

export interface FirebaseShowCaseState {
    userList?: Record[];
    loading?:boolean;
}

export class FirebaseShowCase extends React.Component<FirebaseShowCaseProps, FirebaseShowCaseState>
{

    /**
     * first render
     */
    constructor(props: FirebaseShowCaseProps) {
        super(props);
        this.state = { userList: [],loading:true }
        console.log('ctor');
    }

    public componentWillMount() {
        console.log('componentWillMount');
    }

    public render() {
        console.log('render');


        if(this.state.loading)
        {
            return 'Loading.......';
        }
        return (<div>
            {this.state.userList && this.state.userList.map((user: Record, index: number) => {
                return (<li> {user.uuid} </li>)
            })}
        </div>);
    }


    public async componentDidMount() {
        console.log('componentDiMount');
        Firebase.auth().signInWithEmailAndPassword('praveen@yopmail.com', '123456789')
            .then((response: any) => {
                const user = Firebase.auth().currentUser;;
                const _userlist = this.state.userList;
                _userlist.push({ uuid: user.uid, email: user.email });
                this.setState({ userList: _userlist,loading :false });
            })


    }


    /***  State Change */
    public shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }

    public componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    /// render called


    public componentDidUpdate() {
        console.log('componentDidUpdate');
    }


    /***Props change */

    public componentWillReceiveProps(props: FirebaseShowCaseProps) {
        console.log('componentWillReceiveProps');
    }


    /***Component will unmount while removing the component from  */

    public componentWillUnmount() {
        console.log('componentWillUnMount');
    }





}