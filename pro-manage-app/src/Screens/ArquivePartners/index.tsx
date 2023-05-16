import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './styles';

import { Header } from '../../components/Header';
import SearchBar from '../../components/SearchBar'
import { DisabledCardPartner } from '../../components/DisabledCardPartner';
import { SessionController } from '../../session/SessionController';
import api from '../../api/api';
import { URI } from '../../api/uri';

export function ArquivePartners() {

    const [partners, setPartners] = useState([])
    const [defaultPartners, setDefaultPartners] = useState([])
    const [count, setCount] = useState(0)
    const sessionController = new SessionController()

    
    async function handlePartners() {
        
        const token = await sessionController.getToken()

        try {
            await api.get(URI.PARTNER + '/archived', {
                headers: {
                    Authorization: token
                }
            }).then(response => {
                console.log(response.data)
                setDefaultPartners(response.data)
                setPartners(response.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleSearch = (text : any) => {
        if (!text) {
          setPartners(defaultPartners);
          return;
        }
    
        const filteredPartners = defaultPartners.filter((partner: any) => {
          const name = partner.name.toLowerCase();
          const searchTerm = text.toLowerCase();
          return name.includes(searchTerm);
        });
    
        console.log('PARCEIROS FILTRADOS: ', filteredPartners)
    
        
        setPartners(filteredPartners);
      };

    useEffect(() => {
        if (count < 10) {

            handlePartners()
            setCount(count + 1)
        }
    }, [partners])


    return (
        <>
            <Header title="Parceiros arquivados" />
            <View style={styles.container}>
                <SearchBar placeholder="Pesquisar parceiro" onChangeText={handleSearch}/>
                <ScrollView>
                        {partners.map((item: any) => (
                            <DisabledCardPartner
                                key={item.id}
                                name={item.name}
                                responsible={item.intermediateResponsible}
                            />))
                        }
                </ScrollView>
            </View>
        </>
    );
}  