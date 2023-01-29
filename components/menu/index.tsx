import { IMenu } from '@/lib/types/IMenu'
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Spinner,
    StackDivider,
    VStack,
} from '@chakra-ui/react'
import React from 'react'
import MenuItem from './item'

interface MenuProps {
    data: IMenu | undefined
}

const Menu: React.FC<MenuProps> = ({ data }) => {
    const translations = {
        pizza: 'Pizza',
        salade: 'Salade',
        wraps: 'Wraps',
        traditional: 'Traditioneel',
        traditional_smos: 'Traditioneel smos',
        warm_sandwiches: 'Warme sandwiches',
        special_sandwiches: 'Speciale sandwiches',
        soups: 'Soepen',
        panini: 'Panini',
    }

    return data ? (
        <Accordion allowToggle>
            {Object.keys(data).map((key) => (
                <AccordionItem key={key}>
                    <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                            {/*@ts-ignore*/}
                            {translations[key]}
                        </Box>

                        <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel>
                        <VStack
                            divider={<StackDivider borderColor="gray.200" />}
                            spacing={4}
                            align="stretch"
                        >
                            {data[key].map((menuItem) => (
                                <MenuItem item={menuItem} key={menuItem.name} />
                            ))}
                        </VStack>
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>
    ) : (
        <Box textAlign="center">
            <Spinner />
        </Box>
    )
}

export default Menu
