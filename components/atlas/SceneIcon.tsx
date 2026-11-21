import { HeartHandshake, Coffee, Utensils, Plane, Hotel, CarFront, TrainFront, ShoppingBag, ShoppingCart, Users, MessageCircle, BriefcaseBusiness, Phone, MapPinned, Sun, ShieldCheck, Hand, Compass } from 'lucide-react';
const icons: Record<string, typeof Coffee> = { heart: HeartHandshake, coffee: Coffee, utensils: Utensils, plane: Plane, hotel: Hotel, car: CarFront, train: TrainFront, bag: ShoppingBag, cart: ShoppingCart, users: Users, message: MessageCircle, briefcase: BriefcaseBusiness, phone: Phone, map: MapPinned, sun: Sun, shield: ShieldCheck, '👋': Hand, '☕': Coffee, '✈️': Plane, '💬': MessageCircle, '💼': BriefcaseBusiness, '🥑': Utensils, '☀️': Sun, '🛍️': ShoppingBag };
export default function SceneIcon({ icon, size = 24 }: {
    icon: string;
    size?: number;
}) { const Icon = icons[icon] || Compass; return <Icon size={size} strokeWidth={1.6}/>; }
