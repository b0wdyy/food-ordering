import { IMenu } from '@/lib/types/IMenu'
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
} from '@chakra-ui/react'
import React from 'react'
import MenuItem from './item'

interface MenuProps {
    data: IMenu | undefined
}

const Menu: React.FC<MenuProps> = ({ data }) => {
    return data ? (
        <Accordion>
            {Object.keys(data).map((key) => (
                <AccordionItem key={key}>
                    <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                            {key}
                        </Box>

                        <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel>
                        {data[key].map((menuItem) => (
                            <MenuItem item={menuItem} key={menuItem.name} />
                        ))}
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>
    ) : null
}

export default Menu
