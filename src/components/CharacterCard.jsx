//rafce
import React from 'react'
import { Box, Heading, Image, VStack } from '@chakra-ui/react'

const CharacterCard = (props) => {
    const isAlive = props.character.status==="Alive";
    const CharacterInfo = () => {
        return <VStack spacing={4} pl="5">
            <Heading as="h3">{props.character.name}</Heading>
            {isAlive ? (<Heading as="h3" size="lg" color="green.500"> {props.character.status}</Heading>):(<Heading as="h3" size="lg" color="red.500"> {props.character.status}</Heading>)}
           

        </VStack>
    }
    return (
        <Box boxSize='sm'>

            <Image ml="5"
                boxSize='150px'
                src={props.character.image} alt='image of rick and Morty ' />
            <CharacterInfo></CharacterInfo>
        </Box>
    );
};

export default CharacterCard
