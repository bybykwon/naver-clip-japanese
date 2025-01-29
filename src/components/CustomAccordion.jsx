import React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from '@chakra-ui/react';

const CustomAccordion = ({ items, defaultIndex = 0 }) => {
    return (
        <Accordion defaultIndex={defaultIndex}>
            {items.map((item) => (
                <AccordionItem
                    key={item.value}
                    border='none'
                >
                    <h2>
                        <AccordionButton
                            _expanded={{ bg: '#202020', color: 'white' }}
                            _hover={{ bg: '#202020' }}
                            padding='20px'
                            borderRadius='md'
                            transition='background-color 0.2s'
                        >
                            <Box
                                flex='1'
                                textAlign='left'
                                fontWeight='bold'
                                px={4}
                                py={2}
                            >
                                {item.title}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel
                        pb={4}
                        bg='#202020'
                        borderRadius='md'
                        px={4}
                        py={2}
                    >
                        {item.text}
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default CustomAccordion;
