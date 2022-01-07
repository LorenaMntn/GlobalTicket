import React from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import globoTicket from './TicketDB';

const Tickets = () => {
  const ticketItem = ({item}) => {
    return (
      <View style={styles.tickets}>
        <View>
          <Image style={styles.img} source={item.image} />
        </View>
        <View>
          <Text style={styles.tickettitle}>{item.event}</Text>
          <Text style={styles.ticketshortdescription}>
            {item.shortDescription}
          </Text>
          <Text
            style={styles.ticketdescription}
            numberOfLines={2}
            ellipsizeMode="tail">
            {item.description}
          </Text>
          <Text style={styles.tickettitle}>Price: {item.price}</Text>
          <Text style={styles.ticketbutton}>Get Tickets</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={globoTicket}
        renderItem={ticketItem}
        keyExtractor={item => item.eventId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  tickets: {
    flexDirection: 'column',
  },
  img: {
    height: 180,
    width: '100%',
  },
  tickettitle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ticketshortdescription: {
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: 5,
  },
  ticketdescription: {
    fontWeight: '600',
    padding: 15,
  },
  ticketbutton: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 15,
    paddingTop: 5,
  },
});

export default Tickets;
