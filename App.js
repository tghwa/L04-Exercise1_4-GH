import React from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from "react-native";

// Exercise 1
// const App = () => {
//     return (
//         <View>
//             <Text></Text>
//             <Text style={{fontsize: 24}}>RP Values</Text>
//             <Text style={{color: 'green'}}>Excellence</Text>
//             <Text style={{backgroundColor: 'yellow'}}>Customer-Centric</Text>
//             <Text style={{fontStyle: 'italic'}}>Integrity</Text>
//             <Text style={{textAlign: 'centre'}}>Teamwork</Text>
//             <Text style={{backgroundColor: 'black', color: 'white'}}>Enterprising</Text>
//         </View>
//     );
// };
//
// export default App;


//Exercise 2
// export default function App() {
//     return (
//         <View>
//             <Text></Text>
//             <View style={styles.greenBox}>
//                 <Text style={styles.titleText}>Who We Are</Text>
//             </View>
//             <Text></Text>
//             <View style={styles.greenBox}>
//                 <Text style={styles.boxText}>Our People</Text>
//             </View>
//             <Text></Text>
//             <View style = {styles.greenBox}>
//                 <Text style={styles.boxText}>Our Campus</Text>
//             </View>
//         </View>
//     );
// }
//
// const styles : {greenBox: object, boxText: object, titleText: object} = StyleSheet.create({
//     greenBox:{
//         width: 100,
//         height: 100,
//         backgroundColor: 'green',
//     },
//     boxText: {
//         color:'white',
//         textAlign: 'center',
//     },
//     titleText: {
//         color:'white',
//         textAlign: 'center',
//         fontWeight: 'bold',
//     }
// });


// Exercise 3A
// const styles = StyleSheet.create({
//     parent: {
//         flexDirection: 'row',
//         backgroundColor: '#F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//     },
//     child: {
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 24,
//     },
// });
//
// export default function App() {
//     return (
//         <View style={styles.parent}>
//             <View style={styles.child} backgroundColor="powderblue">
//                 <Text>Child One</Text>
//             </View>
//             <View style={styles.child} backgroundColor="skyblue">
//                 <Text>Child Two</Text>
//             </View>
//             <View style={styles.child} backgroundColor="steelblue">
//                 <Text>Child Three</Text>
//             </View>
//         </View>
//     )
// }


// Exercise 3B
// const styles = StyleSheet.create({
//     parent: {
//         flexDirection: 'column',
//         backgroundColor: '#F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//         flex: 1,
//
//     },
//     child: {
//         borderWidth: 2,
//         alignItems: 'center',
//         fontSize: 24,
//         flex: 1,
//     },
// });
//
// export default function App() {
//     return (
//         <View style={styles.parent}>
//             <View style={[styles.child, {backgroundColor:"powderblue"}]}>
//                 <Text>Child One</Text>
//             </View>
//             <View style={[styles.child, {backgroundColor:"skyblue"}]}>
//                 <Text>Child Two</Text>
//             </View>
//             <View style={[styles.child, {backgroundColor:"steelblue"}]}>
//                 <Text>Child Three</Text>
//             </View>
//         </View>
//     );
// }


// Exercise 3C
// const styles = StyleSheet.create({
//     parent: {
//         flexDirection: 'column',
//         backgroundColor: '#F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//         flex: 1,
//
//     },
//     child: {
//         borderWidth: 2,
//         alignItems: 'center',
//         fontSize: 24,
//         flex: 1,
//     },
// });
//
// export default function App() {
//     return (
//         <View style={styles.parent}>
//             <View style={[styles.child, {backgroundColor:"powderblue", maxWidth:90}]}>
//                 <Text>Child One</Text>
//             </View>
//             <View style={[styles.child, {backgroundColor:"skyblue"}]}>
//                 <Text>Child Two</Text>
//             </View>
//             <View style={[styles.child, {backgroundColor:"steelblue", maxHeight:120}]}>
//                 <Text>Child Three</Text>
//             </View>
//         </View>
//     );
// }


// Exercise 3D
// const styles = StyleSheet.create({
//     parent: {
//         flexDirection: 'row',
//         backgroundColor: '#F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//     },
//     child: {
//         borderWidth: 2,
//         alignItems: 'center',
//         fontSize: 24,
//     },
// });
//
// export default function App() {
//     return (
//         <View style={styles.parent}>
//             <View style={[styles.child, {backgroundColor:"powderblue", maxWidth:90, flex:1}]}>
//                 <Text>Child One</Text>
//             </View>
//             <View style={[styles.child, {backgroundColor:"skyblue", flex:2}]}>
//                 <Text>Child Two</Text>
//             </View>
//             <View style={[styles.child, {backgroundColor:"steelblue", maxHeight:120, flex:3}]}>
//                 <Text>Child Three</Text>
//             </View>
//         </View>
//     );
// }


// Exercise 3E
// const styles = StyleSheet.create({
//     parent: {
//         flexDirection: 'column',
//         backgroundColor: '#F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//         // justifyContent: 'flex-start',
//         // justifyContent: 'flex-end',
//         justifyContent: 'space-around',
//         // justifyContent: 'space-between',
//         flex: 1
//     },
//     child: {
//         borderWidth: 2,
//         alignItems: 'center',
//         fontSize: 24,
//     },
// });
//
// export default function App() {
//     return (
//         <View style={styles.parent}>
//             <View style={[styles.child, {backgroundColor:"powderblue"}]}>
//                 <Text>Child One</Text>
//             </View>
//             <View style={[styles.child, {backgroundColor:"skyblue"}]}>
//                 <Text>Child Two</Text>
//             </View>
//             <View style={[styles.child, {backgroundColor:"steelblue"}]}>
//                 <Text>Child Three</Text>
//             </View>
//         </View>
//     );
// }


// Exercise 4
const styles = StyleSheet.create({
    parent: {
        backgroundColor: 'whitesmoke',
        marginTop: 30,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    child: {
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',

    },
});

export default function App() {
    return (
        <View style={styles.parent}>
            <View style={[styles.child, {backgroundColor:"skyblue"}]}>
                <Text>Square 1</Text>
            </View>
            <View style={[styles.child, {backgroundColor:"turquoise"}]}>
                <Text>Square 2</Text>
            </View>
            <View style={[styles.child, {backgroundColor:"red"}]}>
                <Text>Square 3</Text>
            </View>
        </View>
    );
}
