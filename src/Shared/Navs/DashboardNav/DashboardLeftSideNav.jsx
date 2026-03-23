import Scrollbars from 'react-custom-scrollbars';
import { BsPersonBadge } from 'react-icons/bs';
import { Link } from 'react-router';

const DashboardLeftSideNav = () => {
    return (
                    <Scrollbars>
			<div className="py-10">
				
            {/* Top orange part where have user info */}
			<div className="flex justify-evenly mx-2 rounded bg-white shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] py-3  dark:bg-black dark:text-white dark:border dark:border-white">
				{/* User Image */}
                    <div className="avatar online">
                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
							{/* {
								logUser?.image ?
								<img src={logUser?.image} />
								:
								<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkA7r1pd3h80Lq9uOByb2ALq5FoOAe-Mq0j3_EZzmOo4tXO0CUkRHQrbXMruyClSGA87E&usqp=CAU"
								alt="" />
							} */}

                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkA7r1pd3h80Lq9uOByb2ALq5FoOAe-Mq0j3_EZzmOo4tXO0CUkRHQrbXMruyClSGA87E&usqp=CAU"
								alt="" />
                        </div>
                    </div>

					{/* Name, Role, Location */}
                    {/* <div>
						<>
						{
							user?.displayName ?
							<span className="mr-2">{user?.displayName}</span>
							:
							<span className="mr-2">Guest</span>
						}
						</>
						<>
						{
							logUser?.role &&
                        <span className="badge bg-orange-600 text-white p-3">{logUser?.role}</span>
						}
						</>
                        
						<>
						{
							user?.email &&
							<h1 className="flex">
								<>
								{
									logUser?.location &&
                                    <span>{logUser?.location} ,</span>
								}
								</>
								
								<>
								{
									logUser?.blood &&
                                    <span className="mx-2">{logUser?.blood}</span>
								}
								</>
                        </h1>
						}
						</>
                    </div> */}

                    <span className="mr-2">গেস্ট</span>
            </div>


            {/* All vertical menu list's  */}

			<ul>
			<li>
			<Link to='/dashboard/profile' className="flex mx-10 my-5 hover:text-orange-500 dark:hover:text-[#ff5b09] text-semibold" >
			<span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2">
			<BsPersonBadge />
			</span>
			<span className="mt-2">প্রোফাইল</span>
			</Link>
			</li>
			<li>
			<Link to='/dashboard/add/new/member' className="flex mx-10 my-5 hover:text-orange-500 dark:hover:text-[#ff5b09] text-semibold" >
			<span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2">
			<BsPersonBadge />
			</span>
			<span className="mt-2">নতুন সদস্য যুক্ত করুন</span>
			</Link>
			</li>
			<li>
			<Link to='/dashboard/add/event' className="flex mx-10 my-5 hover:text-orange-500 dark:hover:text-[#ff5b09] text-semibold" >
			<span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2">
			<BsPersonBadge />
			</span>
			<span className="mt-2">নতুন ইভেন্ট যুক্ত করুন</span>
			</Link>
			</li>
			<li>
			<Link to='/dashboard/add/admin/post' className="flex mx-10 my-5 hover:text-orange-500 dark:hover:text-[#ff5b09] text-semibold" >
			<span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2">
			<BsPersonBadge />
			</span>
			<span className="mt-2">পোষ্ট করুন</span>
			</Link>
			</li>
			<li>
			<Link to='/dashboard/add/money/survey' className="flex mx-10 my-5 hover:text-orange-500 dark:hover:text-[#ff5b09] text-semibold" >
			<span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2">
			<BsPersonBadge />
			</span>
			<span className="mt-2">টাকার হিসেব যুক্ত করুন</span>
			</Link>
			</li>

				{/* {
					logUser?.role === 'Admin' &&
					<>
					<li>
						<Link to='/dashboard/control-panel' className="flex mx-10 my-5 hover:text-orange-500 dark:hover:text-[#ff5b09] text-semibold" >
						<span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2">
						<BsFillMotherboardFill />
						</span>
						<span className="mt-2">Control Panel</span>
						</Link>
					</li>

					
					<li>
						<Link to='/dashboard/settings' className="flex mx-10 my-5 hover:text-orange-500 dark:hover:text-[#ff5b09] text-semibold" >
						<span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2">
						<AiFillSetting />
						</span>
						<span className="mt-2">Settings</span>
						</Link>
					</li>


					<li>
						<Link to='/dashboard/search-blood-group' className="flex mx-10 my-5 hover:text-orange-500 dark:hover:text-[#ff5b09] text-semibold" >
						<span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2">
						<BsSearch />
						</span>
						<span className="mt-2">Find Blood</span>
						</Link>
					</li>



					<li>
						<Link to='/dashboard/trust/Bin' className="flex mx-10 my-5 hover:text-orange-500 dark:hover:text-[#ff5b09] text-semibold" >
						<span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2">
						<BsFillEraserFill />
						</span>
						<span className="mt-2">Trust Bin</span>
						</Link>
                    </li>

					<li onClick={handleLogOut}>
						<Link to='/dashboard/trust/Bin' className="flex mx-10 my-5 hover:text-orange-500 dark:hover:text-[#ff5b09] text-semibold" >
						<span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2">
						<BsFillDoorOpenFill />
						</span>
						<span className="mt-2">Log Out</span>
						</Link>
                    </li>

					</>
				}



				{
					logUser?.role === 'Manager' &&
					<>
					<li>
						<Link to='/dashboard/control-panel' className="flex mx-10 my-5 hover:text-orange-500 dark:hover:text-[#ff5b09] text-semibold" >
						<span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2">
						<BsFillMotherboardFill />
						</span>
						<span className="mt-2">Control Panel</span>
						</Link>
					</li>

					
					<li>
						<Link to='/dashboard/settings' className="flex mx-10 my-5 hover:text-orange-500 dark:hover:text-[#ff5b09] text-semibold" >
						<span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2">
						<AiFillSetting />
						</span>
						<span className="mt-2">Settings</span>
						</Link>
					</li>


					<li>
						<Link to='/dashboard/search-blood-group' className="flex mx-10 my-5 hover:text-orange-500 dark:hover:text-[#ff5b09] text-semibold" >
						<span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2">
						<BsSearch />
						</span>
						<span className="mt-2">Find Blood</span>
						</Link>
					</li>



					<li>
						<Link to='/dashboard/trust/Bin' className="flex mx-10 my-1 hover:text-orange-500 dark:hover:text-[#ff5b09] text-semibold" >
						<span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2">
						<BsFillEraserFill />
						</span>
						<span className="mt-2">Trust Bin</span>
						</Link>
                    </li>

					<li onClick={handleLogOut}>
						<Link to='/dashboard/trust/Bin' className="flex mx-10 my-1 hover:text-orange-500 dark:hover:text-[#ff5b09] text-semibold" >
						<span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2">
						<BsFillDoorOpenFill />
						</span>
						<span className="mt-2">Log Out</span>
						</Link>
                    </li>
					</>
				}

				{
					logUser?.role === 'Student' &&
					<>

					<li>
						<Link to='/dashboard/search-blood-group' className="flex mx-10 my-5 hover:text-orange-500 dark:hover:text-[#ff5b09] text-semibold" >
						<span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2">
						<BsSearch />
						</span>
						<span className="mt-2">Find Blood</span>
						</Link>
					</li>

					<li>
						<Link to='/dashboard/settings' className="flex mx-10 my-5 hover:text-orange-500 dark:hover:text-[#ff5b09] text-semibold" >
						<span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2">
						<AiFillSetting />
						</span>
						<span className="mt-2">Settings</span>
						</Link>
					</li>


					<li>
						<Link to='/dashboard/connect-your-favorite-admin' className="flex mx-10 my-5 hover:text-orange-500 dark:hover:text-[#ff5b09] text-semibold" >
						<span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2">
						<BsAwardFill />
						</span>
						<span className="mt-2">Connect With Admin</span>
						</Link>
					</li>

					<li onClick={handleLogOut}>
						<Link to='/dashboard/trust/Bin' className="flex mx-10 my-1 hover:text-orange-500 dark:hover:text-[#ff5b09] text-semibold" >
						<span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2">
						<BsFillDoorOpenFill />
						</span>
						<span className="mt-2">Log Out</span>
						</Link>
                    </li>
					</>
				}
				{
					logUser?.role === 'User' &&
					<>

					<li>
						<Link to='/dashboard/search-blood-group' className="flex mx-10 my-5 hover:text-orange-500 dark:hover:text-[#ff5b09] text-semibold" >
						<span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2">
						<BsSearch />
						</span>
						<span className="mt-2">Find Blood</span>
						</Link>
					</li>


					<li>
						<Link to='/dashboard/connect-your-favorite-admin' className="flex mx-10 my-5 hover:text-orange-500 dark:hover:text-[#ff5b09] text-semibold" >
						<span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2">
						<BsAwardFill />
						</span>
						<span className="mt-2">Connect With Admin</span>
						</Link>
					</li>

					<li onClick={handleLogOut}>
						<Link to='/dashboard/trust/Bin' className="flex mx-10 my-1 hover:text-orange-500 dark:hover:text-[#ff5b09] text-semibold" >
						<span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2">
						<BsFillDoorOpenFill />
						</span>
						<span className="mt-2">Log Out</span>
						</Link>
                    </li>
					</>
				} */}
			</ul>

			</div>
        </Scrollbars>
    );
};

export default DashboardLeftSideNav;