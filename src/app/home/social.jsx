import {
    Badge,
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Container,
    Heading,
    HStack,
    SimpleGrid,
    Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const cardData = [
    {
        id: 1,
        title: 'The perfect latte',
        description: 'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.',
        imageUrl: '/public/images/components/itembox2/',
        badges: ['Hot', 'Caffeine'],
        buttonText: 'Buy Latte',
    },
    {
        id: 2,
        title: 'Cold Brew Delight',
        description: 'Cold brew is steeped in cool water for hours, creating a refreshing and smooth coffee.',
        imageUrl: '/images/components/itembox1/img_info02_v5.png',
        badges: ['Cold', 'Smooth'],
        buttonText: 'Try Cold Brew',
    },
    {
        id: 3,
        title: 'Classic Cappuccino',
        description: 'Cappuccino is a classic Italian coffee drink that’s best known for its rich flavor.',
        imageUrl: '/images/components/itembox1/img_info03_v2.png',
        badges: ['Foamy', 'Rich'],
        buttonText: 'Order Cappuccino',
    },
    {
        id: 4,
        title: 'Espresso Shot',
        description: 'A concentrated shot of coffee with a bold and intense flavor, perfect for a quick boost.',
        imageUrl: '/images/components/itembox1/img_info04_v2.png',
        badges: ['Bold', 'Intense'],
        buttonText: 'Get Espresso',
    },
];

const cardData2 = [
    {
        id: 1,
        title: 'The perfect latte',
        description: 'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.',
        imageUrl:
            'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
        badges: ['Hot', 'Caffeine'],
    },
    {
        id: 2,
        title: 'The perfect latte',
        description: 'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.',
        imageUrl:
            'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
        badges: ['Hot', 'Caffeine'],
    },
];

const Social = () => {
    return (
        <div className='container'>
            <div className='bg-black text-white text-center text-3xl'>
                <span>
                    클립 크리에이터라면
                    <br />
                    누릴 수 있어요
                </span>
            </div>
            <span>
                {cardData.map((card, index) => (
                    <Card
                        key={card.id}
                        maxW='xl'
                        bgColor='gray.100 w'
                    >
                        <CardBody className='p-[2px] bg-gradient-to-r from-naver-green via-blue-500 to-purple-600 rounded-lg'>
                            <div className='flex flex-col gap-4 bg-black rounded-lg p-4 h-full'>
                                <Image
                                    objectFit='cover'
                                    width={1200}
                                    height={1200}
                                    src={card.imageUrl}
                                    alt={card.title}
                                    className='bg-contain'
                                />
                            </div>
                            <Box>
                                <Heading
                                // size='md'
                                // className='line-clamp-1 mb-2'
                                >
                                    {/* {card.title} */}
                                </Heading>
                                {/* <Text className='line-clamp-2'>{card.description}</Text> */}
                                <HStack className='mt-4'>
                                    {/* {card.badges.map((badge, index) => (
                                        <Badge
                                            key={index}
                                            className='bg-black h-full'
                                        >
                                            {badge}
                                        </Badge>
                                    ))} */}
                                </HStack>
                            </Box>
                        </CardBody>
                        {/* <CardFooter>
                            <Button>{card.buttonText}</Button>
                        </CardFooter> */}
                    </Card>
                ))}
            </span>
        </div>
    );
};

export default Social;
