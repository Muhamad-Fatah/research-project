import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
// import image from "./../poster.jpeg"
import roboto from "./assets/font/roboto/Roboto-Italic.ttf"

const NewPdf = () => {


    const image = "https://fakeimg.pl/200x100/282828/eae0d0/?retina=1"

    Font.register({ family: 'Roboto', src: roboto })

    const styles = StyleSheet.create({
        page: {
            backgroundColor: '#E4E4E4'
        },
        section: {
            fontFamily: "Roboto",
            display : "flex",
            flexDirection : "row",
            borderWidth : 1,
            paddingHorizontal : 20,
            gap : 10
        },
        footer: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            textAlign: 'center',
            color: 'grey',
        }
    });

    return (
        <Document>
            {/* <Page size="A4" style={styles.page}>
                <View style={styles.section} fixed>
                    <Image src={image} fixed />
                    <Text>Sectionnnnnn ajsdklfjsdklafj</Text>
                </View>
                <View style={styles.section}>
                    <Text>Section number twosadfjkdshafjkdshafjkasdhfjkhsfgdsfsadfsadfffffffffffffffffffffffffff</Text>
                </View>
            </Page>
            <Page size="A4" style={styles.page} wrap>
                <View style={styles.section}>
                    <Text>Section number twosadfjkdshafjkdshafjkasdhfjkhsfgdsfsadfsadfffffffffffffffffffffffffff</Text>
                </View>
            </Page> */}
            <Page size="A4" wrap>
                <Image src={image} fixed />
                <View style={styles.section}>
                    <Text>•</Text>
                    <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat reiciendis ab consectetur excepturi dolorem eaque, temporibus odit fugit similique quod? Doloremque distinctio, deleniti culpa quibusdam autem velit eveniet cumque</Text>
                </View>
                {/* <Text style={{ marginHorizontal: 8 }}>•Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat reiciendis ab consectetur excepturi dolorem eaque, temporibus odit fugit similique quod? Doloremque distinctio, deleniti culpa quibusdam autem velit eveniet cumque</Text>
                <Text style={{ marginHorizontal: 8 }}>•Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat reiciendis ab consectetur excepturi dolorem eaque, temporibus odit fugit similique quod? Doloremque distinctio, deleniti culpa quibusdam autem velit eveniet cumque</Text>
                <Text break>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, itaque labore doloremque hic ullam deleniti optio ut nobis autem iste voluptatibus ratione eveniet earum deserunt ducimus! Saepe alias ex necessitatibus nemo quo magnam nulla qui ad praesentium soluta inventore, quibusdam fugiat ullam cumque ab eaque officia mollitia voluptatem quod magni!</Text> */}

                <Image src={image} fixed style={styles.footer} />
            </Page>
        </Document>

    )
}

export default NewPdf