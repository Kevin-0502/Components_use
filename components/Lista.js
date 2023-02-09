import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { ListItem,Avatar } from 'react-native-elements'

export default function Lista (){
  
    const lista = [
        {
          nombre: 'Amy Farha',
          cargo: 'Vice President'
        },
        {
          nombre: 'Chris Jackson',
          cargo: 'Vice Chairman'
        },
        {
            nombre: 'Michael Jordan',
            cargo: 'Vice Rector'
        },
        {
            nombre: 'Michael Jordan',
            cargo: 'Vice Rector'
        },
        {
            nombre: 'Michael Jordan',
            cargo: 'Vice Rector'
        },
        {
            nombre: 'Michael Jordan',
            cargo: 'Vice Rector'
        },
        {
            nombre: 'Michael Jordan',
            cargo: 'Vice Rector'
        },
        {
            nombre: 'Michael Jordan',
            cargo: 'Vice Rector'
        },
        {
            nombre: 'Michael Jordan',
            cargo: 'Vice Rector'
        },
        {
            nombre: 'Michael Jordan',
            cargo: 'Vice Rector'
        },
        {
            nombre: 'Michael Jordan',
            cargo: 'Vice Rector'
        },
        {
            nombre: 'Michael Jordan',
            cargo: 'Vice Rector'
        },
        {
            nombre: 'Michael Jordan',
            cargo: 'Vice Rector'
        },
        {
            nombre: 'Michael Jordan',
            cargo: 'Vice Rector'
        },
        {
            nombre: 'Michael Jordan',
            cargo: 'Vice Rector'
        },
        {
            nombre: 'Michael Jordan',
            cargo: 'Vice Rector'
        },
        {
            nombre: 'Stephen Curry',
            cargo: 'GOAT'
        },
    ]

    return (
      lista.map((employe,i)=>(
        <ListItem key={i}>
        <Avatar rounded source={{uri: 'https://assets.stickpng.com/images/585e4bd7cb11b227491c3397.png'}}></Avatar>
        <ListItem.Content>
            <ListItem.Title>{employe.nombre}</ListItem.Title>
            <ListItem.Subtitle>{employe.cargo}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron/>
      </ListItem>
      )

      )
    )
  
}

const styles = StyleSheet.create({

})