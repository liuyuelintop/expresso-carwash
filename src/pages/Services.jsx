import ServiceCard from '../components/ServiceCard'; // 假设您有一个ServiceCard组件
import { SERVICES } from '../constants';

export default function ServicesPage() {
    return (
        <div className="text-neutral-300 p-8">
            <div className="max-w-6xl mx-auto flex-col flex-wrap" >
                <h1 className="text-3xl font-bold text-center mb-10">SERVICES</h1>
                <div className="flex flex-col py-4 mb-4">
                    <img
                        className='rounded'
                        src="https://img1.wsimg.com/isteam/ip/ed19a0df-c36a-4caa-a7ea-695b84cecb2c/Vertiv-Channel_Badge-Authorized_Distributor-HR.png/:/cr=t:0%25,l:5.36%25,w:89.29%25,h:100%25/rs=w:1800,h:900,cg:true" alt="Vertiv" />
                    <div className="text-center">
                        <h2 className='text-neutral-400 mt-6 text-2xl text-center mb-4'>Vertiv Distributor</h2>
                        <p className='text-neutral-500'>Orion distribute Vertiv's range of UPS and Datacenter products</p>
                    </div>
                </div>
                <div className="flex flex-col lg:gap-10 lg:flex-row">
                    {
                        SERVICES.map((service, index) => (
                            <div
                                key={index} className="lg:w-1/2 gap-4">
                                <ServiceCard
                                    title={service.title}
                                    description={service.description}
                                    imageUrl={service.url}
                                    imageAlt={service.title}
                                />
                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-col py-4 mb-4">
                    <img
                        className='rounded'
                        src="https://img1.wsimg.com/isteam/stock/xVQ1A41/:/rs=w:2046,h:1023,cg:true,m/cr=w:2046,h:1023" alt="Software Licensing" />
                    <div className="text-center">
                        <h2 className='mt-6 text-2xl text-center mb-4'>Software Licensing</h2>
                        <div className="flex flex-col gap-1">
                            <p className='text-neutral-500'>Orion distribute Vertiv's range of UPS and Datacenter products</p>
                            <p className='text-neutral-500'>Alt-N MDaemon</p>
                            <p className='text-neutral-500'>Microsoft</p>
                            <p className='text-neutral-500'>VMware</p>
                            <p className='text-neutral-500'>Veeam</p>
                            <p className='text-neutral-500'>MailStore</p>
                            <p className='text-neutral-500'>3CX</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
